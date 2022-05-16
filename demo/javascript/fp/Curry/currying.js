//currying 基本通用式
let currying = function (fn) {
  let args = [].slice.call(arguments, 1);

  return function () {
    // 主要还是收集所有需要的参数到一个数组中，便于统一计算
    let _args = args.concat([].slice.call(arguments));
    return fn.apply(null, _args);
  };
};

let sum = currying(function () {
  let args = [].slice.call(arguments);
  return args.reduce(function (a, b) {
    return a + b;
  });
}, 10);

console.log(sum(10, 2, 5));

//currying 复杂通用式
function curry(fn, length) {
  length = length || fn.length;     // 注释 1
  return function (...args) {            // 注释 2
    return args.length >= length    // 注释 3
      ? fn.apply(this, args)          // 注释 4
      : curry(fn.bind(this, ...args), length - args.length); // 注释 5
  };
}

/*
注释 1：第一次调用获取函数 fn 参数的长度，后续调用获取 fn 剩余参数的长度
注释 2：currying 包裹之后返回一个新函数，接收参数为 ...args
注释 3：新函数接收的参数长度是否大于等于 fn 剩余参数需要接收的长度
注释 4：满足要求，执行 fn 函数，传入新函数的参数
注释 5：不满足要求，递归 currying 函数，新的 fn 为 bind 返回的新函数（bind 绑定了... args 参数，未执行），新的 length 为 fn 剩余参数的长度
*/

function sayHello(name, age, fruit) {
  console.log(`我叫${ name }, 我${ age }岁了, 我喜欢吃${ fruit }`);
}

const betterShowMsg = curry(sayHello);
betterShowMsg('小A', 20, '西瓜');
betterShowMsg('小A')(20, '西瓜');
betterShowMsg('小A')(20)('西瓜');

//最大三个参数
