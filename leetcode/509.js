// 509. 斐波那契数 https://leetcode.cn/problems/fibonacci-number/

var fib = function (n) {
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

const r = fib(50);
console.log("r", r);
