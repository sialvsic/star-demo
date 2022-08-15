// 20. 有效的括号：https://leetcode.cn/problems/valid-parentheses/

/*
字符串是有括号组成，判断内容是否为有效内容

'()' // true
'({})' // true
'[()' // false
'[(])' // false
*/

var isValid = function (s) {
  const map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");

  const arr = [];

  for (let index = 0; index < s.length; index++) {
    const element = s.charAt(index);

    if (map.has(element)) {
      arr.push(element);
    } else {
      const top = arr[arr.length - 1];

      if (map.get(top) === element) {
        arr.pop();
      } else {
        arr.push(element);
      }
    }
  }
  return arr.length === 0;
};

console.log(isValid("()"));
// console.log(judge("({})"));
// console.log(judge("[()"));
// console.log(judge("[(])"));
