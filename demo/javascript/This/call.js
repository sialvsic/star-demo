Function.prototype.myCall1 = function (context) {
  if(typeof this !== "function") {
    throw new TypeError("Error");
  }

  // 默认上下文是window
  context = context || window;
  // 保存默认的fn
  const {fn} = context;

  // 前面讲的关键，将函数本身作为对象context的属性调用，自动绑定this
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);

  // 恢复默认的fn
  context.fn = fn;
  return result;
};

Function.prototype.myCall2 = function (context, ...args) {
  if(typeof this !== "function") {
    throw new TypeError("Error");
  }

  let fn = this;
  return fn.apply(context, ...args);
};


let obj = {
  name: '234',
  getName: function () {
    return this.name;
  }
};

console.log(obj.getName());
console.log(obj.getName.call({name: '456'}));
console.log(obj.getName.myCall1({name: '456'}));
console.log(obj.getName.myCall2({name: '456'}));

