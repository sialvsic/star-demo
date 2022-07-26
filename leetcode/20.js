// 有效的括号：https://leetcode.cn/problems/valid-parentheses/

/*
字符串是有括号组成，判断内容是否为有效内容

'()' // true
'({})' // true
'[()' // false
'[(])' // false
*/

function judge(text) {
  const map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");

  const arr = [];

  for (let index = 0; index < text.length; index++) {
    const element = text.charAt(index);

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
}

console.log(judge("()"));
// console.log(judge("({})"));
// console.log(judge("[()"));
// console.log(judge("[(])"));
