### html・cssのdocs
(https://developer.mozilla.org/ja/docs/Web)[https://developer.mozilla.org/ja/docs/Web]

### classとid
`class`・・・styleを当てるためのもの
`id`・・・jsから操作するために命名するもの

### emとrem
`em`・・・親要素のfont-sizeと比較した大きさ(%)
`rem`・・・bodyに指定されたfont-sizeと比較した大きさ(%)

### querySelectorとgetElementBy◯◯
`querySelector("")`・・・classのときは`.クラス名`、idのときは`#id名`みたいに指定できる
`getElementById("id名")`・・・id属性で指定された要素を取得する
`getElementsByClassName("クラス名")`・・・class属性で指定された要素を取得する
`getElementsByTagName("タグ名")`・・・タグ名で指定された要素を取得する

### classとidの取得
class・・・配列で取得することができる
id・・・1つずつ取得することができる

### jsでstyleを変更する
```js
const element = document.querySelector(".element");
element.style.プロパティ名 = "値";
```