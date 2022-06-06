/**
 * 实现一个add方法，使计算结果能够满足如下预期：
 * add(1)(2)(3) = 6
 * add(1, 2, 3)(4) = 10
 * add(1)(2)(3)(4)(5) = 15
 */

// 柯里化（英语：Currying），又称为部分求值，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
// 并且返回一个新的函数的技术，新函数接受余下参数并返回运算结果。

//方法1
function add() {
  const args = [].slice.call(arguments);

  let fn = function () {
    const arg_fn = [].slice.call(arguments);
    return add.apply(null, args.concat(arg_fn));
  };

  fn.toString = function () {
    return args.reduce((a, b) => a + b);
  };

  return fn;
}

console.log(+add(1, 2, 3));
console.log(+add(1)(2, 4)(3)(8));

//方法2
function add(...args) {
  function fn(...rest) {
    args = args.concat(rest);
    return fn;
  }

  console.log("args", args);

  fn.toString = function () {
    return args.reduce((a, b) => {
      return a + b;
    }, 0);
  };

  return fn;
}

console.log(+add(1)(2)(3)(4));
console.log(+add(1, 2, 3)(4, 5)(5));
