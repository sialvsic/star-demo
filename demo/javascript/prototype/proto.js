function foo() {}

console.log(foo.__proto__ == Function.prototype);
console.log(foo.__proto__ == foo.constructor.prototype);

console.log(foo.constructor == Function);
console.log(foo.constructor.prototype == Function.prototype);

console.log(foo.__proto__.__proto__ == Object.prototype);
