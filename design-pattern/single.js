class Single {
  static obj = null;  //正确 添加到了类上  类属性
  test = 123; //错误 添加到了实例上 实例属性

  static create() {
    if (!this.obj) {
      this.obj = new Single();
    }
    return this.obj;
  }
}

let b = Single.create();
b.a = 1;
b.test = 34;

console.log(b);

let c = Single.create();
console.log(c);
