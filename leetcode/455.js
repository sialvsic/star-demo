// 455. 分发饼干 https://leetcode.cn/problems/assign-cookies/

const { count } = require("console");

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // g 孩子
  // s 饼干

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  console.log("g", g);
  console.log("s", s);

  let i = 0;
  let j = 0;
  let count = 0;

  while (j < s.length && i < g.length) {
    let need = g[i];
    let cookie = s[j];

    if (cookie >= need) {
      count++;
      i++;
      j++;
    } else {
      j++;
    }
  }

  return count;
};

const g = [1, 2, 3];
const s = [1, 1];

const r = findContentChildren(g, s);
console.log("r", r);
