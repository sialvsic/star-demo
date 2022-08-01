// 283. 移动零 https://leetcode.cn/problems/move-zeroes/

/*
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。
*/

// 思路：把不是0的往前移动

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums == null) {
    return;
  }
  //两个指针i和j
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    //当前元素!=0，就把其交换到左边，等于0的交换到右边
    if (nums[i] != 0) {
      let tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
      j++;
      console.log("num", nums);
    }
  }

  console.log("num...", nums);

  return nums;
};

// const nums = [0, 1, 0, 3, 12];
// const nums = [0, 1, 2, 3, 4];
const nums = [0, 0, 1];
const r = moveZeroes(nums);
console.log("r", r); //[1,3,12,0,0]
