// 77. 组合 https://leetcode.cn/problems/combinations/

// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let ret = [];

  let helper = function (start, prev) {
    let len = prev.length;
    if (len === k) {
      ret.push(prev);
      return;
    }

    for (let i = start; i <= n; i++) {
      helper(i + 1, prev.concat(i));
    }
  };

  helper(1, []);

  return ret;
};

const n = 4;
const k = 2;

const r = combine(n, k);
console.log("r", r);
