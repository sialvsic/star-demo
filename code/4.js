/*
题目描述
实现一个方法满足对于输入项的依次处理，返回一个处理之后的结果

输入：
const addSquare = flow([add, square])

输出：
*/

const _ = require("lodash");

function add() {
  // let args = Array.prototype.slice.call(arguments);
  let args = Array.from(arguments);
  return args.reduce((a, b) => {
    return a + b;
  });
}

function square(n) {
  return n * n;
}

function flow(fns) {
  let fnl = fns.reverse();
  return fnl.reduce((a, b) => {
    return function (...args) {
      return a(b(...args));
    };
  });
}

function flow_args(fns) {
  let args = Array.prototype.slice.call(arguments);
  let fnl = args.reverse();
  return fnl.reduce((a, b) => {
    return function (...args) {
      return a(b(...args));
    };
  });
}

function flow_2(fns) {
  const length = fns ? fns.length : 0;

  return function () {
    let args = Array.prototype.slice.call(arguments);
    let index = 0;

    let result = length ? fns[index].apply(this, args) : args[0];
    while (++index < length) {
      result = fns[index].call(this, result);
    }
    return result;
  };
}

// const fn_lodash = _.flow([add, square]);
const fn = flow([add, square]);
const fn_2 = flow_2([add, add, square]);
const fn_lodash = _.flow([add, add, square]);
const fn_args = flow_args(add, add, square);

console.log(fn(1, 2, 3));
console.log(fn_2(1, 2, 3));
console.log(fn_lodash(1, 2, 3));
console.log(fn_args(1, 2, 3));
