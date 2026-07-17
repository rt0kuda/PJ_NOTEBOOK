# PJ_NOTEBOOK 引き継ぎ

## このプロジェクト

「学習ジャーナル + 設計Wiki」です。日々の気づき・学習メモ・疑問を気軽に書き、あとから本棚、Book、章、タグ、テーブル、Database、Taskへ整理して学習サイトとして確認できるようにするのが目的です。

主導線は「今日の記録」だけではありません。読む、書く、あとで整理する、検索する、学習内容を振り返ることを同じく重視します。

## 正本と作業場所

- 新しい正本: `/Users/reina.tokuda/Library/CloudStorage/GoogleDrive-work.wolk.walk.wark@gmail.com/マイドライブ/03_個人PJ/01. like notion`
- メインHTML: `outputs/system-design-basics-ja.html`
- GitHub: `https://github.com/rt0kuda/PJ_NOTEBOOK`
- ブランチ: `main`
- 今後は上記の新しい正本で編集・テスト・commit・pushする。

## 起動と確認

HTMLを直接開くこともできます。ローカルサーバーで確認する場合:

```bash
cd "/Users/reina.tokuda/Library/CloudStorage/GoogleDrive-work.wolk.walk.wark@gmail.com/マイドライブ/03_個人PJ/01. like notion/outputs"
python3 -m http.server 8766
```

ブラウザーで `http://127.0.0.1:8766/system-design-basics-ja.html` を開く。

JavaScript構文確認:

```bash
node - <<'NODE'
const fs = require('fs');
const html = fs.readFileSync('outputs/system-design-basics-ja.html', 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
scripts.forEach((code, i) => { new Function(code); console.log(`script ${i}: ok`); });
NODE
```

## データと保存

- 1ファイルHTML中心の構成。
- ユーザーの編集内容は `localStorage` の `systemDesignWiki.v1` に保存。
- JSON書き出し・読み込み・初期化機能あり。
- `outputs/wiki-sync-server.mjs` と `outputs/wiki-state.json` はブラウザ間共有を進めるための同期関連ファイル。
- 現状は本格的なログイン・複数人同時編集・クラウドDBは未実装。

## 実装済みの主な機能

- 複数の本棚、Book、章/Pageの管理。
- Page、章、Book、本棚の操作導線を分離。
- Pageは「読む / 編集」を明示的に切り替える。
- Bookの短縮名、アイコン、色、説明の編集。
- hover、右クリック、`...` メニュによる対象付近の操作。
- ドラッグによるブロックやページの並び替え。
- Text、Heading、ToDo、Callout、Memo、Code、Math、Table、Database、DB Props、Synced、Backlink、File/Imageブロック。
- ブロックツールバーはPage編集中にsticky表示。
- サマリーの色付きカードはカード1枚ごとにブロック化。
- テーブルは閲覧中のソート、編集中のセル編集・行列追加・削除・並び替え。
- 本文のアノテーション、色分け、メモ。
- 未整理Inbox、気づきメモ、空白から始める「今日の記録」。
- 検索、タグ、Book・章・本文への直接移動。
- 共通 `records` DBをWiki / Journal / Tasks / Dashboard / Databaseで共有。
- `types` は複数値。例: `memo + task`、`journal + question + task`。
- TasksのTodo / Doing / Done / Hold、共有Database、Dashboard。
- 設計、画面表示方式、開発言語、DB、API、運用、品質、開発フロー、拡張子、UI/UXの学習Book。
- UI/UX本棚にEMOJI、フォント、GIF、Atomic Design、UIコンポーネント、バリアント、デザイントークンの資料あり。

## UXの重要ルール

- 人は最初から分類できない。まずメモし、あとから整理できることを前提にする。
- Page、章、Book、本棚の編集モードや管理操作を混ぜない。
- 操作は対象の近くに置く。hover / 右クリック / `...` の内容を合わせる。
- 通常時は読むことを優先し、操作ボタンを常時出しすぎない。
- モバイルでは本文を最優先にし、ページツリーはドロワーにする。
- 最低44px程度のタップ領域、文字切れ、ボタン重なり、横はみ出しを常に確認する。
- Liquid Glassは外した状態。`backdrop-filter`や過度なblurは戻さない。
- あたたかい本棚カラーとNotion風のWikiレイアウトを併用する。

## 次に確認したいこと

- カード1枚ごとのブロック操作が、移動・複製・削除・保存後の再読み込みまで正しく動くか。
- stickyのブロックツールバーが、モバイルのCURRENT PAGEバーと重ならないか。
- Book行の編集、章追加、本棚切替、右クリック操作の回帰テスト。
- 狭いウィンドウ幅で検索、作成、Bookアイコンがすべて操作できるか。
- ブラウザ間の保存共有を実用化するなら、ログイン、API、永続DB、デプロイ構成を別途設計する。

## 別チャットでの再開プロンプト

```text
Google Drive内の以下を正本としてPJ_NOTEBOOKの開発を続けてください。
/Users/reina.tokuda/Library/CloudStorage/GoogleDrive-work.wolk.walk.wark@gmail.com/マイドライブ/03_個人PJ/01. like notion

最初に HANDOFF.md と CONVERSATION_HISTORY.md を読み、git statusとoutputs/system-design-basics-ja.htmlの構造を確認してから作業してください。
本システムは「学習ジャーナル + 設計Wiki」で、メモをあとからBook、章、タグ、Task、Databaseに整理できることを重視します。Page / 章 / Book / 本棚の操作は分離し、hover / 右クリック / ... による直感操作を維持してください。
変更後は構文確認とブラウザ表示をテストし、mainへcommit・pushしてください。
```
