var DI = function (dependencies) {
  this.dependencies = dependencies;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  // Your code goes here
  let that = this;

  return function name() {
    const fn = func.call(
      null,
      that.dependencies.dep3,
      that.dependencies.dep1,
      that.dependencies.dep2
    );

    return fn;
  };
};

// 要注入的依赖
var deps = {
  dep1: function () {
    return "this is dep1";
  },
  dep2: function () {
    return "this is dep2";
  },
  dep3: function () {
    return "this is dep3";
  },
  dep4: function () {
    return "this is dep4";
  },
};

// 新建一个“注射器”
var di = new DI(deps);

// 注射
var myFunc = di.inject(function (dep3, dep1, dep2) {
  console.log("dep3", dep3);
  return [dep1(), dep2(), dep3()].join(" -> ");
});

const r = myFunc();

// "this is dep1 -> this is dep2 -> this is dep3"
console.log("result", r);
