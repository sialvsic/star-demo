// a.js
console.log('a starting');
import { foo } from './b';

console.log('in b, foo:', foo);
export const bar = 2;
console.log('a done');

//使用 node -r esm ./a.js 会报错
//使用 npx babel-node ./a.js 可以执行

// https://juejin.im/post/5ca0425e51882567ce181037?utm_source=gold_browser_extension#heading-45
