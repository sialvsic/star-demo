// 26. 删除有序数组中的重复项 https://leetcode.cn/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }

  let slow = 1;
  let fast = 1;

  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }

  console.log("nums", nums);

  return slow;
};

const nums = [1, 1, 2];
const r = removeDuplicates(nums);
console.log("r", r);
