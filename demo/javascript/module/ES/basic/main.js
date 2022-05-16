console.log('main start');
import { A } from './a';
import B from './b';
import * as C from './c';

if(1 + 2 === 3) {
  // import A from './a';   //不允许这样的调用
  // a()
}

// A.a = 1;
console.log(A);
console.log(B);
console.log(C);

A();
B();
C.C();

// DYNAMIC IMPORT
if(1 + 2 === 3) {
  import('./a').then((module) => {
    console.log(module);
    A('a.js is loaded dynamically');
  });
}

console.log('end');
//node -r esm ./main.js
