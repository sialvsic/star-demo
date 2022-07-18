// 判断是不是回文字符串
function isValidString(str) {
  const length = str.length;
  for (let i = 0; i < length / 2; i++) {
    const item = str[i];
    const lastItem = str[length - 1 - i];

    if (item !== lastItem) {
      return false;
    }
  }
  return true;
}

function isPalindrome(str) {
  const isValid = isValidString(str);
  return isValid;
}

console.log(isPalindrome("abca"));
console.log(isPalindrome("abcdcba"));
