//迭代器
var x = 1;

function* foo() {
  x++;
  yield;
  console.log("x", x);
}

function bar() {
  x++;
}

var it = foo();

it.next();
