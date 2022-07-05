/**
 * 10进制数字转成2进制数字
 * 思路：辗转相除法
 */

function divideBy2(decNumber) {
  let number = "";
  let temp;

  while (decNumber > 0) {
    temp = decNumber % 2;
    number = temp + number;
    decNumber = Math.floor(decNumber / 2);
  }

  return number;
}

console.log(divideBy2(0) === "0");
console.log(divideBy2(1) === "1");
console.log(divideBy2(2) === "10");
console.log(divideBy2(4) === "100");
