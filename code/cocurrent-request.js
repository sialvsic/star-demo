// 前端并发10个相同的请求，怎么控制为只发一个请求

async function fetchData(a) {
  const data = await fetch(`http://localhost:3000/test/${a}`);
  const d = await data.json();
  // console.log(d);
  return d;
}

function cacheAsync(fn, symbol) {
  const cache = new Map();
  const never = Symbol();

  return async function (params) {
    return new Promise((resolve, reject) => {
      symbol = params || symbol;
      let cacheCfg = cache.get(symbol);

      if (!cacheCfg) {
        cacheCfg = {
          hit: never,
          executor: [{ resolve, reject }],
        };
        cache.set(symbol, cacheCfg);
      } else {
        // 命中缓存
        if (cacheCfg.hit !== never) {
          return resolve(cacheCfg.hit);
        }
        cacheCfg.executor.push({ resolve, reject });
      }

      const { executor } = cacheCfg;

      // 处理并发，在请求还处于pending过程中就发起了相同的请求
      // 拿第一个请求
      if (executor.length === 1) {
        const next = async () => {
          try {
            if (!executor.length) return;
            const response = await fn(params);
            // 如果成功了，那么直接resolve掉剩余同样的请求
            while (executor.length) {
              // 清空
              executor.shift().resolve(response);
            }
            // 缓存结果
            cacheCfg.hit = response;
          } catch (error) {
            // 如果失败了 那么这个promise的则为reject
            const { reject } = executor.shift();
            reject(error);
            next(); // 失败重试，降级为串行
          }
        };
        next();
      }
    });
  };
}

var fetch2 = cacheAsync(fetchData, "test2");

console.log(
  fetch2(1).then((res) => {
    console.log("res1", res);
  })
);
console.log(
  fetch2(1).then((res) => {
    console.log("res2", res);
  })
);
console.log(
  fetch2(2).then((res) => {
    console.log("res3", res);
  })
);
console.log(
  fetch2(1).then((res) => {
    console.log("res4", res);
  })
);
console.log(
  fetch2(1).then((res) => {
    console.log("res5", res);
  })
);
console.log(
  fetch2(1).then((res) => {
    console.log("res6", res);
  })
);
