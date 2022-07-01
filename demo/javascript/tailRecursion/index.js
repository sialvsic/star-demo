// 尾递归

//累加
function sum(i) {
  if (i === 1) {
    return 1;
  }
  return i + sum(i - 1);
}

const r = sum(10000); //10000
console.log("r", r);

function tailSum(i, sum) {
  // console.log("i", i);
  // console.log("sum", sum);
  if (i === 1) {
    return i + sum;
  }

  return tailSum(i - 1, sum + i);
}

const s = tailSum(10000, 0); //20000 的时候因为调用栈的深度而报错
console.log("s", s);
