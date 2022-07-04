//co的实现

function run(fn, ...args) {
  return new Promise((resolve, reject) => {
    let it;
    // fn必须是一个函数
    if (typeof fn === "function") {
      it = fn(...args);
    }
    // fn返回的对象必须是一个迭代器
    if (!it || typeof it.next !== "function") {
      return resolve(it);
    }

    onResolved();

    function onResolved(value) {
      let res;

      try {
        res = it.next(value);
      } catch (error) {
        return reject(error);
      }

      next(res);
    }

    function onRejected(reason) {
      let res;

      try {
        res = it.throw(reason);
      } catch (error) {
        return reject(error);
      }

      next(res);
    }

    function next(res) {
      if (res.done) {
        return resolve(res.value);
      }
      // 将结果转换为Promise，然后进行统一处理
      Promise.resolve(res.value).then(onResolved, onRejected);
    }
  });
}
