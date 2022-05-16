结论：

正常情况下，浏览器遇到script标签的加载的js会立即在主线程执行并阻塞后面的js。

defer和async并不会影响脚本的下载，仅仅影响脚本的运行的时机。

- 加上defer会使得该脚本在其他脚本之后运行
- async在加载完成后会立即执行。

## links
1. ![浅谈script标签的defer和async](https://juejin.im/entry/5a7ad55ef265da4e81238da9)
2. ![script中defer和async的区别](https://juejin.im/post/5a1229596fb9a0451704cae8)
2. ![defer和async的区别](https://segmentfault.com/q/1010000000640869)
