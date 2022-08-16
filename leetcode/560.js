// 560. 和为 K 的子数组 https://leetcode.cn/problems/subarray-sum-equals-k/

// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的连续子数组的个数 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  //前缀和数组
  let presum = [nums[0]];
  for (let i = 0; i < nums.length; i++) {
    //这里需要注意，我们的前缀和是presum[1]开始填充的
    presum[i + 1] = nums[i] + presum[i];
  }
  //统计个数
  let count = 0;
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i; j < nums.length; ++j) {
      //注意偏移，因为我们的nums[2]到nums[4]等于presum[5]-presum[2]
      //所以这样就可以得到nums[i,j]区间内的和
      if (presum[j + 1] - presum[i] == k) {
        count++;
      }
    }
  }

  return count;
};

// 思路：前缀和

const nums = [1, 1, 1],
  k = 2;

const r = subarraySum(nums, k);
console.log("r", r); //2
