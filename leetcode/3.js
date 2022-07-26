/*
给定一个字符串 s，请你找出其中不含有重复字符的 最长子串 的长度。
https://leetcode.cn/problems/longest-substring-without-repeating-characters/

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const length = s.length;
  const map = new Map();
  let max = 0;
  let temp = -1;

  for (let index = 0; index < length; index++) {
    const item = s[index];
    if (map.has(item)) {
      const _index = map.get(item);
      temp = Math.max(temp, _index);
    }
    max = Math.max(max, index - temp);
    map.set(item, index);
  }

  if (temp === -1) {
    return length;
  }

  return max;
};

const s1 = "abcabcdbb";
const s2 = "";
const s3 = " ";
const s4 = "au";

const r1 = lengthOfLongestSubstring(s1);
const r2 = lengthOfLongestSubstring(s2);
const r3 = lengthOfLongestSubstring(s3);
const r4 = lengthOfLongestSubstring(s4);

console.log("r1", r1); // 4 abcd
console.log("r2", r2); // 0
console.log("r3", r3); // 1
console.log("r4", r4); // 2
