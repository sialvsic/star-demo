// 46. 全排列 https://leetcode.cn/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [],
    path = [];

  function backtracking(n, k, used) {
    if (path.length === k) {
      //递归终止条件
      res.push([...path]);
      return;
    }

    for (let i = 0; i < k; i++) {
      if (used[i]) continue; //已经使用过了就跳过本轮循环
      path.push(n[i]);
      used[i] = true;
      backtracking(n, k, used); //递归
      path.pop(); //回溯 将push进的元素pop出来 然后标记成未使用 继续其他分支
      used[i] = false;
      console.log("path", path);
    }
  }

  backtracking(nums, nums.length, []); //调用回溯函数 传入nums，nums长度，used数组

  return res;
};

const nums = [1, 2, 3];
// const nums = "abc";

const r = permute(nums);
console.log("r", r); //[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
