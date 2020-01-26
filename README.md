# ビルド
TypeScript から JavaScript にビルドする。

```bash
$ yarn build
$ ls -la dist
```

# 関数化
`app.js` を参考にする。

- 関数を `async function hogeFuga()` で定義する
- `await fooBar` を返す
- 関数を呼び出すときは `await hogeFuga()` で呼ぶ

# クラス化
`appWithClass.js` を参考にする。関数化と同じ。

- メソッドを `async hogeFuga()` で定義する
- `await fooBar` を返す
- メソッドを呼び出すときは `await hogeFuga()` で呼ぶ
  - 実際には `await this.hogeFuga()` などとして呼ぶことになるかもしれない
