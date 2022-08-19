// 70. 爬楼梯 https://leetcode.cn/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}e
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  return climbStairs(n - 1) + climbStairs(n - 2);
};

var climbing = function (n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

const r1 = climbStairs(10);
const r2 = climbing(10);

console.log("r1", r1);
console.log("r2", r2);
