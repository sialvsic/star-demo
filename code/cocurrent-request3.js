/*
实现一个批量请求函数 multiRequest(urls, maxNum)

要求试下：
• 要求最大并发数 maxNum
• 每当有一个请求返回，就留下一个空位，可以增加新的请求
• 所有请求完成后，结果按照 urls 里面的顺序依次打出
*/

function multiRequest(urls = [], maxNum) {
  // 请求总数量
  const len = urls.length;
  // 根据请求数量创建一个数组来保存请求的结果
  const result = new Array(len).fill(false);
  // 当前完成的数量
  let count = 0;
  return new Promise((resolve, reject) => {
    // 请求maxNum个
    while (count < maxNum) {
      next();
    }

    function next() {
      let current = count++;

      // 处理边界条件
      if (current >= len) {
        // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
        !result.includes(false) && resolve(result);
        console.log("result", result);
        return result;
      }

      const url = urls[current];
      // console.log(`开始 ${current}`, new Date().toLocaleString());
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          console.log("res", res);
          // 保存请求结果
          result[current] = res;
          // console.log(`完成 ${current}`, new Date().toLocaleString());
          // 请求没有全部完成, 就递归
          if (current < len) {
            next();
          }
        })
        .catch((err) => {
          // console.log(`结束 ${current}`, new Date().toLocaleString());
          result[current] = err;
          // 请求没有全部完成, 就递归
          if (current < len) {
            next();
          }
        });
    }
  });
}

const urls = [
  "http://127.0.0.1:3000/test/1",
  "http://127.0.0.1:3000/test/2",
  "http://127.0.0.1:3000/test/3",
  "http://127.0.0.1:3000/test/4",
  "http://127.0.0.1:3000/test/5",
  "http://127.0.0.1:3000/test/6",
];

async function run() {
  const r = await multiRequest(urls, 3);
  console.log("r", r);
}

run();
