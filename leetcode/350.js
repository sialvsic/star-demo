// 两个数组的交集 II-350

//https://leetcode.cn/problems/intersection-of-two-arrays-ii/

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

var intersect = function (nums1, nums2) {
  let map1 = makeCountMap(nums1);
  let res = [];

  for (let index = 0; index < nums2.length; index++) {
    const element = nums2[index];

    if (map1.has(element)) {
      const value = map1.get(element);
      if (value > 0) {
        res.push(element);
        map1.set(element, value - 1);
      }
    }
  }

  return res;
};

function makeCountMap(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let count = map.get(num);
    if (count) {
      map.set(num, count + 1);
    } else {
      map.set(num, 1);
    }
  }
  return map;
}

const r = intersect(nums1, nums2);
console.log("r", r);
