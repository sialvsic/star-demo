//斐波那契数列常规写法
function fib(n) {
  if (n === 1) {
    return 1;
  } else if (n === 0) {
    return 0;
  }

  return fib(n - 1) + fib(n - 2);
}

console.time("start");
const f = fib(40); //1.4s
const f1 = fib(45); //17.4s
console.log("f", f);
console.timeEnd("start");
