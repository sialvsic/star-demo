// 尾递归

//累加
function sum(i) {
  if (i === 1) {
    return 1;
  }
  return i + sum(i - 1);
}

// const r = sum(10000); //10000
// console.log("r", r);

//TODO:有问题
function tailSum(i, sum) {
  // console.log("i", i);
  // console.log("sum", sum);
  if (i === 1) {
    return i + sum;
  }

  return tailSum(i - 1, sum + i);
}

const s = tailSum(20000, 0); //10000
console.log("s", s);
