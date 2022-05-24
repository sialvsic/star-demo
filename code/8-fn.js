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

exports.SuperTask = SuperTask;
