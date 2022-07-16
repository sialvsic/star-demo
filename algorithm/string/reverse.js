/**
字符串反转
*/

String.prototype._reverse1 = function (str) {
  let newStr = "";
  for (let index = str.length - 1; index >= 0; index--) {
    const element = str[index];

    newStr += element;
  }

  return newStr;
};

String.prototype._reverse2 = function (str) {
  return str.split("").reverse().join("");
};

const str = "12345";
const s = new String();

console.log(s._reverse1(str));
console.log(s._reverse2(str));
