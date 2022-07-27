// 136 只出现一次的数字 https://leetcode.cn/problems/single-number/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map();
  const length = nums.length;
  for (let index = 0; index < length; index++) {
    const element = nums[index];

    if (map.has(element)) {
      let temp = map.get(element);
      map.set(element, temp + 1);
    } else {
      map.set(element, 0);
    }
  }
  const keys = Array.from(map.keys());

  for (let index = 0; index < keys.length; index++) {
    const element = map.get(keys[index]);
    if (element === 0) {
      return keys[index];
    }
  }

  return 0;
};

const nums = [4, 1, 2, 1, 2];

const r = singleNumber(nums);
console.log("r", r);
