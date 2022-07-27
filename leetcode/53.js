// 53. 最大子数组和 https://leetcode.cn/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (sum > 0) {
      sum += element;
    } else {
      sum = element;
    }

    ans = Math.max(ans, sum);
  }

  return ans;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const r = maxSubArray(nums);
console.log("r", r); //6
