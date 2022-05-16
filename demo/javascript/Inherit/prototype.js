function Animal(special) {
  this.special = special;
}

Animal.prototype.getAge = function () {
  return this.age;
};

function Cat(name) {
  this.name = name;
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat; // 将Cat.prototype.constructor重新指向本身
Cat.prototype.getName = function () {
  return this.name;
};

/**
 * 测试代码
 */
let cat = new Cat('cat');
cat.getAge(); // output: Animal
console.log(cat.getName()); // output: Animal
console.log(cat.species); // undefined
