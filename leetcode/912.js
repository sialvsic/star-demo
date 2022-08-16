// 912. 排序数组 https://leetcode.cn/problems/sort-an-array/

//冒泡排序
var sortArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  return nums;
};

//快速排序
var sortArray = function (nums) {
  function pivot(nums, start, end) {
    let pivot = nums[start];
    let left = start;
    let right = end;

    while (left < right) {
      //右指针左移
      while (left < right && nums[right] > pivot) {
        right--;
      }

      //左指针左移
      while (left < right && nums[left] <= pivot) {
        left++;
      }

      if (left < right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
      }
    }

    let temp = nums[left];
    nums[left] = nums[start];
    nums[start] = temp;

    return left;
  }

  function sort(nums, start, end) {
    if (start >= end) {
      return;
    }

    let middle = pivot(nums, start, end);
    sort(nums, start, middle - 1);
    sort(nums, middle + 1, end);
  }

  sort(nums, 0, nums.length - 1);
  return nums;
};

const nums = [5, 2, 3, 1, 10];
const r = sortArray(nums);
console.log("r", r); //[ 1, 2, 3, 5, 10 ]
