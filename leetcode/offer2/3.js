// 剑指 Offer 03. 数组中重复的数字 https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/

// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const length = nums.length;
  const map = new Map();
  for (let index = 0; index < length; index++) {
    const element = nums[index];
    if (map.has(element)) {
      return element;
    }
    map.set(element, true);
  }

  return null;
};

const nums = [2, 3, 1, 0, 2, 5, 3];
const r = findRepeatNumber(nums);
console.log("r", r); //2 或 3
