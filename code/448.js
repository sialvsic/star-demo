// 448. 找到所有数组中消失的数字 https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/

/*
给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 方法一
var findDisappearedNumbers = function (nums) {
  const length = nums.length; //n
  const map = new Map();
  const arr = [];

  for (let index = 0; index < length; index++) {
    const element = nums[index];
    map.set(element, true);
  }

  // console.log(map);

  for (let index = 1; index <= length; index++) {
    if (!map.has(index)) {
      arr.push(index);
    }
  }

  return arr;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const r = findDisappearedNumbers2(nums); //
console.log("r", r); //[5,6]
