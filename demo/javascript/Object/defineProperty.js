const obj = {
  name: 123
}

let sum = 0;
Object.defineProperty(obj, 'age', {
  // value: '100',  //设置初始值，默认为undefined
  configurable: false, //是否可删除属性， 默认false 不可删除
  enumerable: false, //是否可枚举，默认false 不可枚举 
  // writable: false, //该属性能否被赋值运算符改变，默认为 false 不可改变
  get() {
    return sum++
  },
  set() {
    return sum++
  }
})

console.log(obj);
console.log(obj.age = 1);
console.log(obj.age);
console.log(obj.age);
console.log(Object.keys(obj))
console.log(Object.values(obj))

console.log('Reflect', Reflect.ownKeys(obj)); //不受configurable影响