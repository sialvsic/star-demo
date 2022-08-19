// 剑指 Offer 05. 替换空格 https://leetcode.cn/problems/ti-huan-kong-ge-lcof/

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  s = s.replace(/ /g, "%20");
  return s;
};

const s = "We are happy.";

const r = replaceSpace(s);
console.log("r", r); //"We%20are%20happy."
