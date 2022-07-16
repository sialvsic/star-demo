/**
字符串唯一的第一个字符
*/

String.prototype._unique = function (str) {
  const newStr = str.split("").sort().join("");

  const length = newStr.length;
  for (let index = 0; index < length; index++) {
    const element = newStr[index];
    let prevElement = newStr[index - 1];
    let nextElement = newStr[index + 1];

    if (index === 0) {
      prevElement = newStr[0];
    } else if (index === length - 1) {
      nextElement = newStr[length - 1];
    }

    if (element !== prevElement && element !== nextElement) {
      return element;
    }
  }
};

const str = "12333412457887";
const s = new String();

console.log(s._unique(str)); //5
