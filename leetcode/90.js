// 90. 子集II https://leetcode.cn/problems/subsets-ii/

var subsetsWithDup = function (nums) {
  let result = [];
  let path = [];
  let sortNums = nums.sort((a, b) => {
    return a - b;
  });
  function backtracing(startIndex, sortNums) {
    result.push(path.slice(0));
    if (startIndex > nums.length - 1) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      backtracing(i + 1, sortNums);
      path.pop();
    }
  }
  backtracing(0, sortNums);
  return result;
};

// 思路

const nums = [1, 2, 2];
const r = subsetsWithDup(nums);
console.log("r", r);
