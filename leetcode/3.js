/*
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

https://leetcode.cn/problems/longest-substring-without-repeating-characters/

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let max = 0;
  let temp = 0;

  for (let index = 0; index < s.length; index++) {
    const item = s[index];
    if (map.has(item)) {
      const _index = map.get(item);
      temp = Math.max(temp, _index);
    }
    max = Math.max(max, index - temp);
    map.set(item, index);
  }

  return max;
};

const s = "abcabcdbb";

const r = lengthOfLongestSubstring(s);
console.log("r", r); // 4 abcd
