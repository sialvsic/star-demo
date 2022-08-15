// 198. 打家劫舍  https://leetcode.cn/problems/house-robber/

/*
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length;
  const dp = [nums[0], Math.max(nums[0], nums[1])]; //初始化dp数组的前两项

  for (let i = 2; i < len; i++) {
    //从第三个位置开始遍历
    //dp[i - 2] + nums[i] 表示偷当前位置，那么i-1的位置不能偷，
    //而且需要加上dp[i-2],也就是前i-2个房间的金钱
    const now = dp[i - 2] + nums[i];

    //dp[i - 1]表示偷当前位置，只偷i-1的房间
    const last = dp[i - 1];

    dp[i] = Math.max(now, last);
  }
  return dp[len - 1]; //返回最后最大的项
};

const nums = [1, 2, 3, 1];
const nums1 = [2, 1, 1, 2];

const r = rob(nums);
const r1 = rob(nums1);
console.log("r", r); //4 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。 偷窃到的最高金额 = 1 + 3 = 4
console.log("r1", r1); //4 偷窃 1 号房屋 (金额 = 2) ，然后偷窃 4 号房屋 (金额 = 2)。 偷窃到的最高金额 = 2 + 2 = 4

// 思路：动态规划
