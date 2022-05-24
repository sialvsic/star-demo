Function.prototype._call1 = function (obj) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  // 默认上下文是window
  let context = obj || window;

  // 前面讲的关键，将函数本身作为对象context的属性调用，自动绑定this
  context._fn = this;
  const args = [...arguments].slice(1);
  const result = context._fn(...args);

  delete context._fn;

  return result;
};

Function.prototype._call2 = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  let fn = this;
  return fn.apply(context, ...args);
};

let obj = {
  name: "234",
  getName: function () {
    return this.name;
  },
};

console.log(obj.getName());
console.log(obj.getName.call({ name: "456" }));
console.log(obj.getName._call1({ name: "456" }));
console.log(obj.getName._call2({ name: "456" }));
