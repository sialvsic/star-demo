const puppeteer = require("puppeteer");
const path = require("path");
const axios = require("axios");

const maxView = 10; //10页 100条
const wait_time = 1000;

// 实现控制并发的任务
// 应用场景：一般浏览器都会限制最大请求书，微信小程序之前就限制过最大并行的请求数不能超过10个

// 带并发的异步调度器 Scheduler
// JS 实现一个带并发限制的异度调度器 Scheduler，保证同时运行的任务最多有两个。完善下面代码中的 Scheduler 类，使得以下程序能正确输出

function SuperTask(maxTaskNumber = 2) {
  this.taskQueue = [];
  this.runTaskNumber = 0;
  this.maxTaskNumber = maxTaskNumber;
}

SuperTask.prototype.add = function (fn) {
  return new Promise((resolve, reject) => {
    const task = () => {
      return fn().then(() => {
        resolve();
      });
    };

    this.taskQueue.push(task);
    this.run();
  });
};

SuperTask.prototype.run = function () {
  // console.log(this.taskQueue);

  while (this.runTaskNumber < this.maxTaskNumber && this.taskQueue.length) {
    this.runTaskNumber++;
    const task = this.taskQueue.shift();
    task().then(() => {
      this.runTaskNumber--;
      this.run();
    });
  }
};

// 问题：实现一个任务队列，满足最大并发两个

function timeout(time = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

const superTask = new SuperTask();

function addTask(fn, name) {
  superTask.add(fn).then(() => {
    console.log(`任务${name}完成`);
  });
}

// addTask(10000, 1); // 10000ms后输出 任务1完成
// addTask(5000, 2); // 5000ms后输出 任务2完成
// addTask(3000, 3); // 8000ms后输出 任务3完成
// addTask(4000, 4); // 12000ms后输出 任务4完成
// addTask(5000, 5); // 15000ms后输出 任务5完成

// function fetch

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1680,
    height: 800,
  });

  for (let index = 1; index <= maxView; index++) {
    const response = await axios.get(
      `https://alpha.metajam.studio/api/v1/explore/project?pageNum=${index}&pageSize=10&sort=createTime&direction=desc&tracks=&recruits=&event=&from=1`
    );

    // console.log(response.data);
    const list = response.data.data.list;
    // console.log(list);

    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const slug = item.slug;
      // await addTask(timeout, i);
      // await page.goto(`https://alpha.metajam.studio/project/${slug}`);
      await page.goto(`http://localhost:3000/project/${slug}`);
      await timeout(wait_time);
      console.log(`index: ${index} i: ${i}`);
    }
  }

  // await page.goto(`http://localhost:3000/project/${slug}`);
  // await timer(wait_time);
  // await page.screenshot({ path: outputPath });

  await browser.close();
})();
