# PJ Notebook

設計と開発の基礎知識を、本棚・Book・章・学習ジャーナルとして整理するローカル編集Wikiです。

## 開き方

静的サイトとして見るだけなら、`index.html` を開きます。

```bash
open index.html
```

別ブラウザ間でも同じ内容を保存したい場合は、ローカル共有サーバーを起動します。

```bash
npm start
```

起動後はこちらを開きます。

```text
http://127.0.0.1:8765/system-design-basics-ja.html
```

## 保存について

- 通常はブラウザの `localStorage` に保存します。
- `npm start` でローカル共有サーバーを起動している場合、`outputs/wiki-state.json` にも保存され、同じPC内の別ブラウザから共有できます。
- `outputs/wiki-state.json` は個人の編集内容を含むため、Gitには含めません。

## GitHub Pagesでの注意

GitHub Pagesでは静的サイトとして表示できます。ただし、GitHub Pages上ではローカル共有サーバーは動かないため、保存は各ブラウザの `localStorage` になります。

クラウド保存やログインを入れる場合は、Firebase / Supabase / GitHub OAuth + DB などの外部保存先が別途必要です。
