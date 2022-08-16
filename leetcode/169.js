// 169. 多数元素 https://leetcode.cn/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  const length = nums.length;

  for (let index = 0; index < length; index++) {
    const element = nums[index];
    if (map.has(element)) {
      const temp = map.get(element);
      map.set(element, temp + 1);
    } else {
      map.set(element, 1);
    }
  }

  let max = length / 2;

  const keys = Array.from(map.keys());

  for (let i = 0; i < keys.length; i++) {
    let _key = keys[i];
    let item = map.get(_key);
    if (item > max) {
      return _key;
    }
  }

  return -1;
};

// const nums = [2, 2, 1, 1, 1, 1, 1, 2, 2];
const nums = [3, 2, 3];
const r = majorityElement(nums);
console.log("r", r);
