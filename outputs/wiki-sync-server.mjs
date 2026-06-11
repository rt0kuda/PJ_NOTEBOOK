import http from "node:http";
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const portArgIndex = process.argv.indexOf("--port");
const port = Number(process.env.PORT || (portArgIndex >= 0 ? process.argv[portArgIndex + 1] : 8765));
const statePath = path.join(__dirname, "wiki-state.json");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8",
  ".drawio": "application/xml; charset=utf-8"
};

const sendJson = (response, statusCode, payload) => {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  response.end(JSON.stringify(payload));
};

const readBody = request => new Promise((resolve, reject) => {
  let body = "";
  request.setEncoding("utf8");
  request.on("data", chunk => {
    body += chunk;
    if (body.length > 20 * 1024 * 1024) {
      reject(new Error("body too large"));
      request.destroy();
    }
  });
  request.on("end", () => resolve(body));
  request.on("error", reject);
});

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host || "127.0.0.1"}`);

  if (request.method === "OPTIONS") {
    sendJson(response, 204, {});
    return;
  }

  if (url.pathname === "/wiki-state" && request.method === "GET") {
    try {
      const raw = await readFile(statePath, "utf8");
      sendJson(response, 200, { ok: true, state: JSON.parse(raw) });
    } catch {
      sendJson(response, 200, { ok: true, state: null });
    }
    return;
  }

  if (url.pathname === "/wiki-state" && request.method === "POST") {
    try {
      const body = await readBody(request);
      const parsed = JSON.parse(body || "{}");
      if (!parsed.state || !Array.isArray(parsed.state.books) || !Array.isArray(parsed.state.pages)) {
        sendJson(response, 400, { ok: false, error: "invalid state" });
        return;
      }
      await mkdir(path.dirname(statePath), { recursive: true });
      await writeFile(statePath, JSON.stringify(parsed.state, null, 2), "utf8");
      sendJson(response, 200, { ok: true });
    } catch (error) {
      sendJson(response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (url.pathname === "/wiki-state/reset" && request.method === "POST") {
    await rm(statePath, { force: true });
    sendJson(response, 200, { ok: true });
    return;
  }

  const requestedPath = url.pathname === "/" ? "/system-design-basics-ja.html" : decodeURIComponent(url.pathname);
  const filePath = path.normalize(path.join(__dirname, requestedPath));
  if (!filePath.startsWith(__dirname)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const extension = path.extname(filePath).toLowerCase();
    const content = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
      "Access-Control-Allow-Origin": "*"
    });
    response.end(content);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Wiki sync server: http://127.0.0.1:${port}/system-design-basics-ja.html`);
  console.log(`Shared state file: ${statePath}`);
});
