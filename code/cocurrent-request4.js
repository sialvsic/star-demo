/*
实现一个批量请求函数 multiRequest(urls, maxNum)

要求试下：
• 要求最大并发数 maxNum
• 每当有一个请求返回，就留下一个空位，可以增加新的请求
• 所有请求完成后，结果按照 urls 里面的顺序依次打出
*/

let startTime = Date.now();
const timeout = (timeout, ret) => {
  return (idx) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const compare = Date.now() - startTime;
        console.log(`At ${Math.floor(compare / 100)}00 return`, ret);
        resolve(idx);
      }, timeout);
    });
};

class Concurrent {
  maxConcurrent = 2;

  constructor(count = 2) {
    this.maxConcurrent = count;
  }

  //实现run函数 here:
  async add() {
    console.log("run");
  }
}

const timeout1 = timeout(1000, 1);
const timeout2 = timeout(300, 2);
const timeout3 = timeout(400, 3);
const timeout4 = timeout(500, 4);
const timeout5 = timeout(200, 5);

const run = async () => {
  const concurrent = new Concurrent();
  startTime = Date.now();
  await concurrent.add([timeout1, timeout2, timeout3, timeout4, timeout5]);
};

run();
