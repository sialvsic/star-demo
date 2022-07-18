// 字符串出现的不重复最长长度(无重复字符的最长子串)
var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let i = -1; //指针
  let res = 0;
  let n = s.length;

  for (let j = 0; j < n; j++) {
    const element = s[j];

    if (map.has(element)) {
      i = Math.max(i, map.get(element));
    }
    res = Math.max(res, j - i);
    map.set(element, j);
  }

  return res;
};

console.log(lengthOfLongestSubstring("abcabcdbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
