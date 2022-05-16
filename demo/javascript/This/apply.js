Function.prototype.myApply1 = function (context, ...args) {
  if(typeof this !== "function") {
    throw new TypeError("Error");
  }

  context = context || window;
  const {fn} = context;

  context.fn = this;
  let result;

  result = context.fn(...args);

  context.fn = fn;
  return result;
};

let obj = {
  name: '234',
  getName: function () {
    return this.name;
  }
};

console.log(obj.getName());
console.log(obj.getName.myApply1({name: '456'}));

