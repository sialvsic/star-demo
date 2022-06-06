/*
业务需求中，经常有只需要最后一次请求的结果（比如搜索）编写一个高阶函数，传递 旧请求方法（执行后返回promise），返回一个新方法。
连续触发时，若上一次promise执行未结束则直接废弃，只有最后一次promise会触发then/reject。
*/

// 示例
let count = 1;

let promiseFunction = () =>
  new Promise((rs) =>
    window.setTimeout(() => {
      rs(count++);
    })
  );

function lastPromise(fn) {
  let timer = null;
  return async (...args) => {
    const response = await fn(...args);
    console.log("response", response);
    clearTimeout(timer);

    return new Promise((resolve) => {
      timer = setTimeout(() => {
        resolve(response);
      }, 0);
    });
  };
}

let lastFn = lastPromise(promiseFunction);
lastFn().then(console.log); // 无输出
lastFn().then(console.log); // 无输出
lastFn().then(console.log); // 3
