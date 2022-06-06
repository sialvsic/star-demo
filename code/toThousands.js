// 编写函数toThousands(money)，传入金额，将金额转换为千分位表示法，
// 如输入 1293213 ，输出 1,293,213

function toThousands(number) {
  let string = number.toString();
  let result = '';

  while(string.length > 3) {
    result = ',' + string.slice(-3) + result;
    string = string.slice(0, string.length - 3);
  }

  if(string) {
    result = string + result;
  }

  return result
}

function toThousands(num) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

function toThousands(value) {
  let stringValue = value.toString();
  let result = [];

  for(let i = 1; i <= stringValue.length; i++) {
    result.unshift(stringValue[stringValue.length - i]);

    if(i % 3 === 0 && i !== stringValue.length) {
      result.unshift(',');
    }
  }
  return result.join('');
}

console.log(toThousands(1234567) === '1,234,567');
console.log(toThousands(123) === '123');
console.log(toThousands(1234) === '1,234');
console.log(toThousands(0) === '0');
