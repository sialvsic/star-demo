// promise.race的实现
_promise.prototype.race = function (promises) {
  return new Promise((resolve, reject) => {
    // 这里不需要使用索引，只要能循环出每一项就行

    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];
      promise.then(resolve, reject);
    }
  });
};
