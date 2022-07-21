/*
给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let arr = [];

  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const values = Array.from(set1.values());

  for (let index = 0; index < values.length; index++) {
    const element = values[index];
    if (set2.has(element)) {
      arr.push(element);
    }
  }

  return arr;
};

const nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 5, 8];
const r = intersection(nums1, nums2);
console.log("r", r);
