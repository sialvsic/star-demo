//小数截断：toFixed可以补0
function func1(value, decimalLength) {
  const factor = Math.pow(10, decimalLength);
  return Number((Math.floor(value * factor) / factor).toFixed(decimalLength));
  // return Number((((value * length)) / length).toFixed(decimalLength));
}

function func(value, decimalLength) {
  const integer = value.split(".")[0];
  const decimal = value.split(".")[1];

  if (decimal && decimal.length > decimalLength) {
    const newDecimals = decimal.slice(0, decimalLength);
    value = `${integer}.${newDecimals}`;
  }

  return Number(value).toFixed(decimalLength);
}

console.log(func("1.23", 2) === "1.23");
console.log(func("1.28", 2) === "1.28");
console.log(func("1.284", 2) === "1.28");
console.log(func("1.288", 2) === "1.28");
console.log(func("65.100", 2) === "65.10");
console.log(func("65.1", 2) === "65.10");
