// 48. 旋转图像 https://leetcode.cn/problems/rotate-image/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 先镜像反转
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  //再逐行反转
  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    element.reverse();
  }

  // console.log("matrix", matrix);
  return matrix;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const r = rotate(matrix);
console.log("r", r);
