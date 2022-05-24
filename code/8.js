// 实现控制并发的任务

const { SuperTask } = require("./8-fn");

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
