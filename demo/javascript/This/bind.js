//不能使用箭头函数
Function.prototype._bind = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  var _this = this;
  var args = [...arguments].slice(1);

  // 返回一个函数

  console.log("1");
  console.log(arguments);
  console.log(arguments[0]);
  console.log(typeof arguments[0]);
  console.log([...arguments]);
  console.log([...arguments].slice(1));

  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }

    console.log("2");
    console.log(arguments);
    console.log([...arguments]);
    return _this.apply(context, args.concat(...arguments));
  };
};

function foo() {
  console.log(this);
  console.log(this.name);
}

var a = {
  name: "yixing",
};

foo = foo._bind(a);

foo();
