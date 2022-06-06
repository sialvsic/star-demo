function _instanceof(instance, fn) {
  let prototype = instance.__proto__;

  while (prototype !== null) {
    if (prototype === fn.prototype) {
      return true;
    } else {
      prototype = prototype.__proto__;
    }
  }
  return false;
}

class Man {}

class People {}

let a = new Man();
let b = new People();

console.log(a instanceof Man);
console.log(b instanceof People);
console.log(b instanceof Man);
console.log(_instanceof(a, Man));
