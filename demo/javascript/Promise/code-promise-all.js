// promise.all的实现

// 方法一
_promise.prototype.all = function (promises) {
  return new Promise((resolve, reject) => {
    let index = 0;
    let result = [];

    if (promises.length === 0) {
      resolve(result);
    } else {
      function processValue(i, data) {
        result[i] = data;
        if (++index === promises.length) {
          resolve(result);
        }
      }

      for (let i = 0; i < promises.length; i++) {
        //promises[i] 可能是普通值
        Promise.resolve(promises[i]).then(
          (data) => {
            processValue(i, data);
          },
          (err) => {
            reject(err);
            return;
          }
        );
      }
    }
  });
};

// 方法二

_promise.prototype.all = function (promises) {
  let arr = [],
    count = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item)
        .then((res) => {
          arr[i] = res;
          count += 1;
          if (count === promises.length) {
            resolve(arr);
          }
        })
        .catch(reject);
    });
  });
};
