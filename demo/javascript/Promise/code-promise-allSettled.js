// promise.allSettled的实现
_promise.prototype.allSettled = function (promises) {
  let arr = [],
    count = 0;
  return new Promise((resolve, reject) => {
    const processResult = (res, index, status) => {
      arr[index] = { status: status, val: res };
      count += 1;
      if (count === promises.length) {
        resolve(arr);
      }
    };

    promises.forEach((item, i) => {
      Promise.resolve(item).then(
        (res) => {
          processResult(res, i, "fulfilled");
        },
        (err) => {
          processResult(err, i, "rejected");
        }
      );
    });
  });
};
