# 開発経緯サマリー

## 1. FPaaSの図解から開始

- Miroとdraw.ioを元に、FPaaSの業務フロー、サービス申込、アプリ起動、ログイン、初回登録を図解した。
- WebViewとSDKの往復、矢印の意味、UA、閉塞チェック、partner_id、tenant、商品、連携方式などを整理した。
- ユースケース図、API連携図、シーケンス図、ER図、データフロー図、クラス図、構成図などをdraw.ioで作成した。

## 2. システム設計教材HTMLへ発展

- 要件定義書、外部設計、詳細設計、画面設計、共通定義書、テスト、運用、リリースまでのドキュメントをフェーズ別に整理した。
- 各ドキュメントのテンプレート、入力元、出力先、紐付けマトリックスを追加した。
- UI/UXデザインフェーズ、ワイヤーフレーム、画面レイアウト図、デザインカンプ、UIコンポーネント一覧を追加した。

## 3. 3冊の本から学習本棚へ

- 「システム設計の基本」「画面表示方式の基礎」「開発言語と技術」の3冊構成から始めた。
- 静的ページ、動的ページ、Webサイト、Webページ、Webアプリ、ブラウザ、WebView、Native、Hybridを整理した。
- JavaScript、CSS、HTML、Python、C、React、Google Maps、Lottieなどの分類とコードイメージを追加した。
- DB、API・認証・セキュリティ、インフラ・運用、テスト・品質保証、Git・CI/CD、拡張子とファイル形式へ広げた。
- CRUD、RDB、KVS、JSON、SVG、PNG、JPG、WebP、GIF、TXT、CSV、PDF、LOG、BLG、BLOBなどを教材化した。

## 4. 本棚UIからNotion風Wikiへ

- ビジュアル本棚と本のカードUIを作成した。
- ページが縦に長くなりすぎたため、トグル、カード開閉、ホバープレビュー、検索を追加した。
- AppFlowy、Notion、Nuclino、GROWI、Coda、Airtable、ClickUp、Craftの特徴を比較し、Notion風のページツリーとブロック編集に進んだ。
- リキッドグラスCSSは一度検討したが、可読性と操作性を優先して削除した。

## 5. 編集可能なWikiへ

- `localStorage`保存によるBook追加、章追加、本文編集、複製、削除、初期化、JSONバックアップを追加した。
- Page本文編集、章管理、Book管理、本棚管理を分離した。
- 章とBookの並び替え、ホバー操作、右クリック、`...`メニュ、トースト、確認ダイアログを実装した。
- Notion風のブロック追加、ブロック変換、ドラッグ、同期ブロック、バックリンク、ファイル添付、画像/メディア、コード、数式、テーブル、簡易DBを追加した。
- テーブルのソート、セル編集、行列追加、行列削除、並び替えを追加した。
- アノテーションとブロックプレビューを追加した。

## 6. 学習ジャーナル型へ

- 「まず書く、あとで整理する」という方針を中心にした。
- 未整理Inbox、気づきメモ、疑問、学習メモ、設計メモ、空白から始める今日の記録を追加した。
- メモをBook、章、用語ページ、TODO、DB行へ変換できる方向にした。
- 共通record DBを追加し、Wiki / Journal / Tasks / Dashboard / Databaseが同じrecordを異なる切り口で表示する構成にした。
- `types` を複数選択にし、メモでありタスクでもあるデータを1件として管理できるようにした。

## 7. UI/UX本棚

- UI/UXを別本棚にし、EMOJI、フォント、GIF、Atomic Designを別Pageにした。
- UIのBookにコンポーネント、バリアント、State、Property/Props、Slot、Instance、Override、デザイントークン、パターン、合成、運用ルールを追加した。
- モバイルと狭いウィンドウ幅をNotionアプリに近いドロワー構成へ改善した。

## 8. GitHubと今後の運用

- GitHubリポジトリ: `rt0kuda/PJ_NOTEBOOK`
- `main` へ直接commit・pushしてきた。
- GitHub CLIのアクティブアカウントは `rt0kuda`。
- 今後はGoogle Drive内の `01. like notion` を正本にし、作業完了時にテスト、commit、pushまで行う。
