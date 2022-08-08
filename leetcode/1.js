// 1. 两数之和 https://leetcode.cn/problems/two-sum/

// nums = [2,7,11,15], target = 9

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [2, 7, 11, 15];
const target = 9;

var twoSum = function (nums, target) {
  const map = new Map();
  const length = nums.length;

  for (let index = 0; index < length; index++) {
    const item = nums[index];
    const diff = target - item;

    if (map.has(diff)) {
      const _index = map.get(diff);
      return [index, _index];
    }

    map.set(item, index);
  }
};

const r = twoSum(nums, target);
console.log("r", r);

/*
log
2022.08.08
*/
