function Animal(species) {
  this.species = species;
}

Animal.prototype.func = function () {
  console.log('Animal');
};

function Cat() {
  Animal.apply(this, arguments);
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

/**
 * 测试代码
 */
var cat = new Cat('cat');
cat.func(); // output: Animal
console.log(cat.species); // output: cat
