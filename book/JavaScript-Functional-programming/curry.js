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
