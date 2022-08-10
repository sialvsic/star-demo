// 78. 子集 https://leetcode.cn/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];
  backtrack([], 0);
  function backtrack(path, start) {
    // 通过解构的方式将数组放入，如果直接将path push,会造成全部为空，
    // 因为数组是引用类型变量，在回溯的时候又会将之清除，所以需要浅拷贝一份
    res.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(path, i + 1);
      // 回溯
      path.pop();
    }
  }
  return res;
};

const nums = [1, 2, 3];
const r = subsets(nums);
console.log("r", r); //[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
