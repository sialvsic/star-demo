function create(Con, ...args) {
  // 创建一个空的对象
  let obj = {};

  // 链接到原型
  Object.setPrototypeOf(obj, Con.prototype); // obj.__proto__ = Con.prototype;

  // 绑定 this，执行构造函数
  let result = Con.apply(obj, ...args);

  // 判断构造函数返回值是否为对象，如果为对象就使用构造函数返回的值，否则使用obj
  return typeof result === 'object' ? result : obj
}

function People(age, height) {
  this.age = age;
  this.height = height;
}

let c = create(People, ['12', 180]);
console.log(c);
