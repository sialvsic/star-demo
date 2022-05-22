function test1() {
  console.log(1 + a); //ReferenceError: a is not defined
  a = 3;
}

function test2() {
  console.log(1 + a); // 输出NAN a是undefined
  var a = 3;
}

function test3() {
  console.log(1 + a); //ReferenceError: Cannot access 'a' before initialization
  let a = 3;
}

test1();
test2();
test3();
