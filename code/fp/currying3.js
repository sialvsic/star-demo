// 实现curry
function curry(fn) {
  //TODO:?
}

//test
function add(...args) {
  //求和
  return args.reduce((a, b) => a + b);
}

let sumFn = curry(add);

console.log(sumFn(1)(2)(3)(4)); //6
console.log(sumFn(1)(2, 3)(4)); //6
