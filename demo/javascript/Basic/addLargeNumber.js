// 大数计算

function addLargeNumber(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = '';

  while (i >= 0 || j >= 0) {
    let x = 0;
    let y = 0;
    let sum;

    if (i >= 0) {
      x = a[i] - '0';
      i--;
    }

    if (j >= 0) {
      y = b[j] - '0';
      j--;
    }

    sum = x + y + carry;

    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }

    result += sum;
  }

  console.log(result);
  if (carry) {
    result = carry + result;
  }

  console.log(result);

  return +result;
}

console.log(addLargeNumber('999', '1') === 1000);
console.log(addLargeNumber('1', '999') === 1000);
console.log(addLargeNumber('123', '321') === 444);
