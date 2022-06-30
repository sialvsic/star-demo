//斐波那契数列尾递归写法

function fib(n) {
  return fibInner(0, 1, n);
}

//思路：递归改为循环
function fibInner(a, b, n) {
  if (n === 0) {
    return a;
  }

  return fibInner(b, a + b, n - 1);
}

console.time("start");
const f = fib(40); //8~10ms
console.log("f", f);
console.timeEnd("start");
