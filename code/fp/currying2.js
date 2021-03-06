// 实现curry
function curry(fn) {
  let args = [];
  return function temp(...newArgs) {
    if (newArgs.length) {
      args = [...args, ...newArgs];
      return temp;
    } else {
      let val = fn.apply(this, args);
      args = []; //保证再次调用时清空
      return val;
    }
  };
}

//test
function add(...args) {
  //求和
  return args.reduce((a, b) => a + b);
}

let sumFn = curry(add);

console.log(sumFn(1)(2)(3)(4)()); //6
console.log(sumFn(1)(2, 3)(4)()); //6
