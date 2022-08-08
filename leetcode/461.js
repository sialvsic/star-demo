// 461. 汉明距离  https://leetcode.cn/problems/hamming-distance/

// 两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。
// 给你两个整数 x 和 y，计算并返回它们之间的汉明距离。

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let t1 = parseInt(x + "").toString(2);
  let t2 = parseInt(y + "").toString(2);

  const t1max = t1.length >= t2.length ? true : false;

  if (t1max) {
    let diff = t1.length - t2.length;
    let str = new Array(diff).fill("0").join("");
    t2 = str + t2;
  } else {
    let diff = t2.length - t1.length;
    let str = new Array(diff).fill("0").join("");
    t1 = str + t1;
  }

  let sum = 0;
  for (let i = 0; i < t1.length; i++) {
    const x1 = t1[i];
    const x2 = t2[i];

    if (x1 != x2) {
      sum++;
    }
  }

  return sum;
};

const r = hammingDistance(1, 4);
console.log("r", r); //2
