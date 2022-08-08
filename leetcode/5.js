// 5. 最长回文子串 https://leetcode.cn/problems/longest-palindromic-substring/

// 给一个字符串 s，找到 s 中最长的回文子串

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s == null || s.length == 0) {
    return "";
  }

  let strLen = s.length;
  let left = 0;
  let right = 0;
  let len = 1;
  let maxStart = 0;
  let maxLen = 0;

  for (let i = 0; i < strLen; i++) {
    left = i - 1;
    right = i + 1;
    while (left >= 0 && s[left] == s[i]) {
      len++;
      left--;
    }
    while (right < strLen && s[right] == s[i]) {
      len++;
      right++;
    }
    while (left >= 0 && right < strLen && s[right] == s[left]) {
      len = len + 2;
      left--;
      right++;
    }

    if (len > maxLen) {
      maxLen = len;
      maxStart = left;
    }
    len = 1;
  }
  return s.substring(maxStart + 1, maxStart + maxLen + 1);
};

const s = "babad";

const r = longestPalindrome(s);
console.log("r", r); //bab
