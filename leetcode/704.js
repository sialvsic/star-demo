// 704. 二分查找 https://leetcode.cn/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    // let mid = left + Math.floor((right - left) / 2);
    let mid = Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

const nums = [-1, 0, 3, 5, 9, 12],
  target = 9;

const r = search(nums, target);
console.log("r", r); //4
