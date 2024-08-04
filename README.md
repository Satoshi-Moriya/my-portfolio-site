# My Portfolio Site

## 俺的コーディングの規則

### ディレクトリ構成
下記を参考

[Next.jsディレクトリ構成・設計再考（featuresが何を解決するか）](https://zenn.dev/yodaka/articles/eca2d4bf552aeb#%2Fstyles%2C%2Ftypes)

### 文字列
- 基本的に"「ダブルクォート」を使用する
- 文字列の中に"「ダブルクォート」が含まれる場合は'「シングルクォート」を使用する
- 文字列展開する必要があるときは`「バッククォート」を使用する

参考記事
- [string | TypeScript入門『サバイバルTypeScript』](https://typescriptbook.jp/reference/values-types-variables/string)

### レイアウト調整
- 1,2個程度の（marginをつけたいなど）の場合はstyled-componentsの「css prop」を使いたい（なんかうまくできないので現状はコンポーネントを作っている）
- 複雑な場合はコンポーネント作成

参考記事
- [スタイルを上書きできるコンポーネントはなるべく作らない方がいいという話](https://qiita.com/mrskiro/items/1d8c4264be2b35a428b1)
- [styled-componentsを使ったCSS設計](https://qiita.com/taneba/items/4547830b461d11a69a20#%E5%91%BD%E5%90%8D%E3%81%99%E3%82%8B%E3%81%BB%E3%81%A9%E3%81%A7%E3%82%82%E3%81%AA%E3%81%84style%E3%82%92%E5%BD%93%E3%81%A6%E3%81%9F%E3%81%84%E6%99%82)

### エキスポート方法
- コンポーネントは「default export」
- 関数は「named export」

※[named exportは有害だと考えられます](https://zenn.dev/yuhr/articles/668dba202726bf)と[なぜ default export を使うべきではないのか？](https://engineering.linecorp.com/ja/blog/you-dont-need-default-export)の記事を参考に、ともにメリットデメリットがあると判断しました。また、僕自身がまだ、それぞれメリットデメリットを感じれるほどの開発経験がないため、今回は、僕がNext.jsを学ぶ際に使わさせてもらった[Learn Next.js | Next.js by Vercel - The React Framework](https://nextjs.org/learn?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=home)の記事でやっている通りにしました。（上記の法則をこの記事でやっているのかわからないです。あくまで僕が見たかぎりそのように見えました。）

### 行末のカンマ
- 基本つける（下記記事に同意したため）

[【JavaScript】オブジェクト・配列・関数引数の末尾カンマ](https://rennnosukesann.hatenablog.com/entry/2018/05/04/173502)

### importについて
- 書くのが楽になりそうなので、aliasを設定の上、絶対パスにする
- 書く順番はライブラリなどを上、自作コンポーネントを下、オブジェクト全体>特定のオブジェクト

参考記事
- [【TypeScript】importする際相対パスではなくエイリアスを使用する](https://zenn.dev/yuji6523/articles/react-absolute-path)


### テストについて
画面遷移にアニメーションをつける予定で、Next.jsだと難しい印象があるので、一旦機能のテストなどはせずに、アニメーションが問題なく対応できるか開発を進めていく。（2023年12月7日）