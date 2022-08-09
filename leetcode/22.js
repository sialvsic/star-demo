// 22. 括号生成 https://leetcode.cn/problems/generate-parentheses/

// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];
  const backtrack = (left, right, str) => {
    if (left === n && right === n) return result.push(str);
    if (left < n) backtrack(left + 1, right, str + "(");
    if (right < left) backtrack(left, right + 1, str + ")");
  };
  backtrack(0, 0, "");
  return result;
};

const r = generateParenthesis(3);
console.log("r", r); // ["((()))","(()())","(())()","()(())","()()()"]
