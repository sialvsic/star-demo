function Animal(special) {
  this.special = special;
}

Animal.prototype.getAge = function () {
  return this.age;
};

function Cat() {
  Animal.apply(this, arguments); // 只调用了1次构造函数
}

inheritPrototype(Cat, Animal);

function inheritPrototype(sub, parent) {
  // 拿到父类的原型
  let prototype = Object.create(parent.prototype);
  // 改变constructor指向
  prototype.constructor = sub;
  // 父类原型赋给子类
  sub.prototype = prototype;
}

/**
 * 测试代码
 */

let cat = new Cat('cat');
cat.func(); // output: Animal
console.log(cat.species); // output: cat
