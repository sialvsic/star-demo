// 347. 前 K 个高频元素 https://leetcode.cn/problems/top-k-frequent-elements/

// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let len = nums.length;
  let map = new Map();
  //做表，统计出现次数
  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) {
      let count = map.get(nums[i]);
      map.set(nums[i], ++count);
    } else {
      map.set(nums[i], 1);
    }
  }
  console.log(map);
  let arr = Array.from(map); //根据表生成数组
  console.log(arr);

  let res = [];
  arr.sort((a, b) => b[1] - a[1]); //依据出现次数从多到少排序
  for (let j = 0; j < k; j++) {
    res.push(arr[j][0]);
  }
  return res;
};

const nums = [1, 1, 1, 2, 2, 3],
  k = 2;

const r = topKFrequent(nums, k);
console.log("r", r); //[1,2]
