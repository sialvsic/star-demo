// 16. 最接近的三数之和 https://leetcode.cn/problems/3sum-closest/

const nums = [-1, 2, 1, -4];
const target = 1;

var threeSumClosest = function (nums, target) {
  let n = nums.length;

  //先排序
  nums.sort((a, b) => a - b);

  let min = Infinity;
  let res;

  for (let i = 0; i < nums.length; i++) {
    let basic = nums[i];
    let left = i + 1; //左指针 从i右侧的第一位开始尝试
    let right = n - 1; //右指针 从数组的最后一位开始尝试

    while (left < right) {
      let sum = basic + nums[left] + nums[right];
      let diff = Math.abs(sum - target);

      if (diff < min) {
        min = diff;
        res = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }
    }
  }

  return res;
};

const r = threeSumClosest(nums, target);
console.log("r", r);
