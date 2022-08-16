// 344. 反转字符串 https://leetcode.cn/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const length = s.length;
  for (let i = 0; i < length / 2; i++) {
    let temp = s[i];
    s[i] = s[length - 1 - i];
    s[length - 1 - i] = temp;
  }

  return s;
};

const s = ["h", "e", "l", "l", "o", "1"];
const r = reverseString(s);
console.log("r", r);
