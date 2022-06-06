Function.prototype._apply = function (obj, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  const context = obj || window;

  context._fn = this;

  let result;
  if (args === undefined || args === null) {
    //undefined 或者 是 null 不是 Iterator 对象，不能被 ...
    result = context._fn(args);
  } else if (typeof args === "object") {
    result = context._fn(...args);
  }

  delete context._fn;
  return result;
};

let obj = {
  name: "234",
  getName: function () {
    return this.name;
  },
};

console.log(obj.getName());
console.log(obj.getName._apply({ name: "456" }));
