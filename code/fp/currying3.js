class Task {
  constructor() {
    this.list = [];
    this.logNum = 0;
    this.waitNum = 0;
    setTimeout(() => {
      this.next();
    });
  }
  log(n) {
    this.logNum = n;
    const fn = () => {
      let num = n;
      console.log(num);
      this.next();
    };
    this.list.push(fn);
    return this;
  }
  wait(n) {
    this.waitNum = n;
    const fn = () => {
      setTimeout(() => {
        console.log(`等待了${n}秒`);
        this.next();
      }, n * 1000);
    };
    this.list.push(fn);
    return this;
  }
  next() {
    const fn = this.list.shift();
    fn && fn();
  }
}

const t = new Task();
// console.log(t)
t.log(1).log(2).wait(3).log(4).wait(2).wait(3).log(6);
