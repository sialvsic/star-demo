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
  console.log(this.taskQueue);

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

function timeout(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

const superTask = new SuperTask();

function addTask(time, name) {
  superTask
    .add(() => timeout(time))
    .then(() => {
      console.log(`任务${name}完成`);
    });
}

addTask(10000, 1); // 10000ms后输出 任务1完成
addTask(5000, 2); // 5000ms后输出 任务2完成
addTask(3000, 3); // 8000ms后输出 任务3完成
addTask(4000, 4); // 12000ms后输出 任务4完成
addTask(5000, 5); // 15000ms后输出 任务5完成
