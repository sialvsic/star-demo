// 15 三数之和
// https://leetcode.cn/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  const length = nums.length;

  let i = 0;
  while (i < length) {
    let next = i + 1;
    let last = length - 1;

    while (next < last) {
      let sum = nums[i] + nums[next] + nums[last];
      if (sum == 0) {
        res.push([nums[i], nums[next], nums[last]]);
      }
      if (sum <= 0) {
        while (nums[next] === nums[++next]) {}
      } else {
        while (nums[last] === nums[--last]) {}
      }
    }
    while (nums[i] === nums[++i]) {}
  }

  return res;
};

const nums = [-1, 0, 1, 2, -1, -4];

const r = threeSum(nums);
console.log("r", r);

// output: [[-1,-1,2],[-1,0,1]]
