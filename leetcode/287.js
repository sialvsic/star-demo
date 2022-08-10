// 287. 寻找重复数

/*
给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。

假设 nums 只有 一个重复的整数 ，返回 这个重复的数

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (map.has(item)) {
      return item;
    }

    map.set(item, true);
  }
};

const nums = [1, 3, 4, 2, 2];
const r = findDuplicate(nums);
console.log("r", r); //2
