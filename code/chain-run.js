class Tom {
  constructor() {
    this.list = [];
    setTimeout(() => {
      this.run();
    }, 0);
  }

  eat(string) {
    const fn = () => {
      console.log(string);
      this.run();
    };

    this.list.push(fn);
    return this;
  }

  sleep(time) {
    const fn = () => {
      setTimeout(() => {
        console.log("run xx");
        this.run();
      }, time * 1000);
    };
    this.list.push(fn);
    return this;
  }

  run() {
    const task = this.list.shift();
    if (task) {
      task();
    }
  }
}

// 实现Tom函数 满足以下的调用
const tom = new Tom();
tom.eat("123").sleep(3).eat("456").eat("789");
