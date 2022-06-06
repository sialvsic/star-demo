/**
数组过滤
*/

Array.prototype._filter = function (fn) {
  if (typeof fn !== "function") {
    throw Error("参数必须是一个函数");
  }
  const res = [];
  for (let i = 0, len = this.length; i < len; i++) {
    fn(this[i]) && res.push(this[i]);
  }
  return res;
};

const arr = [1, 2, 3, 4, 4, 5];

console.log(arr.filter((item) => item === 4));
