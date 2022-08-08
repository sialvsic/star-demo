// 338. 比特位计数 https://leetcode.cn/problems/counting-bits/

// 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let arr = [];

  function calc(n) {
    return parseInt(n).toString(2);
  }

  for (let i = 0; i <= n; i++) {
    //计算二进制数
    const str = calc(i);

    //计算二进制中的1
    let sum = 0;

    for (let j = 0; j < str.length; j++) {
      const item = str[j];
      if (item == 1) {
        sum++;
      }
    }

    arr.push(sum);
  }

  return arr;
};

// 0 0
// 1 01
// 2 10
// 3 11
// 4 100

const r = countBits(5);
console.log("r", r); //[0,1,1,2,1,2]
