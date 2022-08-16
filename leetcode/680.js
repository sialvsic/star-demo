// 680. 验证回文字符串II https://leetcode.cn/problems/valid-palindrome-ii/

/**
 * @param {string} s
 * @return {boolean}
 */

function isValidPalindrome(string) {
  for (let i = 0; i < string.length; i++) {
    const first = string[i];
    const last = string[string.length - 1 - i];
    if (first !== last) {
      return false;
    }
  }
  return true;
}

var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return (
        isValidPalindrome(s.slice(left + 1, right + 1)) ||
        isValidPalindrome(s.slice(left, right))
      );
    }
  }

  return true;
};

const s = "abc";
const r = validPalindrome(s);
console.log("r", r);
