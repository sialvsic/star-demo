// 125. 验证回文串 https://leetcode.cn/problems/reverse-string/

var isPalindrome = function (s) {
  const newStr = s.replace(/[^a-zA-Z0-9]/g, "").toLocaleLowerCase();
  const l = newStr.length;

  for (let i = 0; i < l; i++) {
    const first = newStr[i];
    const last = newStr[l - 1 - i];
    if (first !== last) {
      return false;
    }
  }

  return true;
};

const s = "A man, a plan, a canal: Panama";
const r = isPalindrome(s);
console.log("r", r); //false
