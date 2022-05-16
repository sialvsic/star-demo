function Animal() {
  this.species = '动物';
}

function Cat() {
  //执行父类的构造方法，上下文为实例对象
  Animal.apply(this, arguments);
}

/**
 * 测试代码
 */
let cat = new Cat();
console.log(cat.species); // output: 动物
