/**
数组map
*/

Array.prototype._map = function (fn) {
  if (typeof fn !== "function") {
    throw Error("参数必须是一个函数");
  }
  const res = [];
  for (let i = 0, len = this.length; i < len; i++) {
    res.push(fn(this[i]));
  }
  return res;
};

const arr = [1, 2, 3, 4, 4, 5];

console.log(arr._map((item) => item + 1));
