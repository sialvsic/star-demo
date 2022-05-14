var a = { n: 1 }
var b = a
a.x = a = { n: 2 } // 此时的变量b是什么?

console.log(a);
console.log(b);