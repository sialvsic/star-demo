// 59. 螺旋矩阵 II https://leetcode.cn/problems/spiral-matrix-ii/
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let top = 0,
    left = 0,
    right = n - 1,
    bottom = n - 1;

  let index = 1;
  let max = n * n;
  let arr = [];

  let a = new Array(n).fill("");

  for (let i = 0; i < n; i++) {
    arr.push([...a]);
  }

  while (index <= max) {
    for (let i = left; i <= right; i++) {
      arr[top][i] = index++;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      arr[i][right] = index++; // top to bottom.
    }
    right--;
    for (let i = right; i >= left; i--) {
      arr[bottom][i] = index++; // right to left.
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      arr[i][left] = index++; // bottom to top.
    }
    left++;
  }
  return arr;
};

const n = 3;

const r = generateMatrix(n); //[[1,2,3],[8,9,4],[7,6,5]]
console.log("r", r);
