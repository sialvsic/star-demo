// 215. 数组中的第K个最大元素 https://leetcode.cn/problems/kth-largest-element-in-an-array/

/*
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class Heap {
  constructor(compare) {
    this.arr = [0]; // 忽略 0 这个索引,方便计算左右节点
    this.compare = compare ? compare : (a, b) => a > b; // 默认是大顶堆
  }
  get size() {
    return this.arr.length - 1;
  }
  // 新增元素
  push(item) {
    this.arr.push(item);
    this.shiftUp(this.arr.length - 1);
  }
  // 元素上浮，k 是索引
  shiftUp(k) {
    let { arr, compare, parent } = this;
    // 当前元素 > 父元素，则进行交换
    while (k > 1 && compare(arr[k], arr[parent(k)])) {
      this.swap(parent(k), k);
      k = parent(k); // 更新 k 的位置为父元素的位置（交换了位置）
    }
  }
  // 弹出堆顶
  pop() {
    if (this.arr.length == 1) return null;
    this.swap(1, this.arr.length - 1); // 将结尾元素和堆顶元素交换位置
    let head = this.arr.pop(); // 删除堆顶
    this.sinkDown(1); // 再做下沉操作
    return head;
  }
  // 元素下沉
  sinkDown(k) {
    let { arr, compare, left, right, size } = this;
    while (left(k) <= size) {
      // 1. 拿到左右节点的最大值
      let child = left(k);
      if (right(k) <= size && compare(arr[right(k)], arr[child])) {
        child = right(k);
      }
      // 2. k 满足大顶堆或小顶堆，什么都不做
      if (compare(arr[k], arr[child])) {
        return;
      }
      // 3. 交换位置后，继续下沉操作
      this.swap(k, child);
      k = child; // 更新位置
    }
  }
  // 获取堆顶元素
  peek() {
    return this.arr[1];
  }
  // 获取左边元素节点
  left(k) {
    return k * 2;
  }
  // 获取右边元素节点
  right(k) {
    return k * 2 + 1;
  }
  // 获取父节点
  parent(k) {
    return Math.floor(k >> 1);
  }
  // i、j 交换位置
  swap(i, j) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
  }
}

var findKthLargest = function (nums, k) {
  // 维护一个大小是 K 的小顶堆
  let minHeap = new Heap((a, b) => a < b);
  for (let num of nums) {
    minHeap.push(num);
    if (minHeap.size > k) {
      minHeap.pop();
    }
  }

  return minHeap.peek();
};

const arr = [3, 2, 3, 1, 2, 4, 5, 5, 6];

// [3,2,3,1,2,4,5,5,6]

// 维护一个长度为k的一个小根堆，保持队列中的元素始终为k个，遍历数组nums，入队一个元素之后，立即弹出堆顶最小的元素，遍历完后，堆顶的元素，就是第k大的数字

const r = findKthLargest(arr, 4);
console.log("r", r); //4
