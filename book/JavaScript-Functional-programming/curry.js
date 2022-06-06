function curry(fun) {
  return function (arg) {
    return fun(arg);
  };
}

/*
curry的理解
1. 接受一个函数
2. 返回一个只接受一个参数的函数
*/

function curry1(fn, args = []) {
  return function () {
    let rest = [...args, ...arguments];
    if (rest.length < fn.length) {
      return curry.call(this, fn, rest);
    } else {
      return fn.apply(this, rest);
    }
  };
}
