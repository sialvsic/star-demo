//斐波那契数列循环写法

function fib(n) {
  let a = 0; //  相当于 memo[i]
  let b = 1; // 相当于 memo[i+1]
  let sum = 0;
  let i = 0;

  while (i < n) {
    sum = a + b;
    a = b;
    b = sum;
    i++;
  }

  return a;
}

console.time("start");
const f = fib(40); //8~10ms
console.log("f", f);
console.timeEnd("start");
