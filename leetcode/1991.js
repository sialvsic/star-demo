/*
1991.找到数组的中间位置
https://leetcode.cn/problems/find-the-middle-index-in-array/solution/1991zhao-dao-shu-zu-de-zhong-jian-wei-zh-e8cp/

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {

  function calcLeft(index, nums) {
    if (index === 0) {
      return 0
    }

    const left = nums.slice(0, index);
    return left.reduce((a, b) => a + b, 0)
  }

  function calcRight(index, nums) {
    if (index === nums.length - 1) {
      return 0
    }

    const right = nums.slice(index + 1);
    return right.reduce((a, b) => a + b, 0)
  }

  for (let index = 0; index < nums.length; index++) {
    let left = calcLeft(index, nums);
    let right = calcRight(index, nums);

    if (left === right) {
      return index;
    }
  }

  return -1;
};


const numbers1 = [1, 7, 3, 6, 5, 6]
const numbers2 = [1, 2, 3]
const numbers3 = [2, 1, -1]

console.log(pivotIndex(numbers1) === 3);
console.log(pivotIndex(numbers2) === -1);
console.log(pivotIndex(numbers3) === 0);