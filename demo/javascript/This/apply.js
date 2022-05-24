Function.prototype._apply = function (obj, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  const context = obj || window;

  context._fn = this;
  let result = context._fn(...args);

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
