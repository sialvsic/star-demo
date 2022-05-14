/**
 * 1.使以下代码正常运行
 * const a = [1, 2, 3, 4, 5];
 *
 * a.multiply();
 *
 * console.log(a);
 * [ 1, 2, 3, 4, 5, 1, 4, 9, 16, 25 ]
 */

const a = [1, 2, 3, 4, 5];

Array.prototype.multiply = function () {
  this.forEach((item) => {
    this.push(Math.pow(item, 2));
  });
};

a.multiply();

console.log(a);
