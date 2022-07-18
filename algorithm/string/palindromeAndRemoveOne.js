/* 回文是指正反读都一样的词语。
提供一个非空字符串s，你可以删除最多一个字母。判断是否可以把它变成回文字符串。
例子 1: Input: "aba"       Output: True
例子 2: Input: "abca"       Output: True    注释: 删除 'c'.
 
请填写以下TODO部分答题，如需其它方法，可自行编写
*/

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
  const length = str.length;

  for (let i = 0; i < length; i++) {
    const arr = str.split("");
    arr.splice(i, 0);
    const newString = arr.join("");

    const isValid = isValidString(newString);
    if (isValid) {
      return true;
    }
  }

  return false;
}

console.log(isPalindrome("abca"));
console.log(isPalindrome("abcdcba"));
