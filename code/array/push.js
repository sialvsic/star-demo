Array.prototype._push = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
};

const arr = [1, 2, 3];

console.log(arr._push(4));
console.log(arr);
