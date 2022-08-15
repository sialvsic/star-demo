// 515. 在每个树行中找最大值 https://leetcode.cn/problems/find-largest-value-in-each-tree-row/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root || root.length == 0) {
    return [];
  }

  let arr = [];
  arr.push(root);
  let result = [];

  while (arr.length !== 0) {
    const array = arr.splice(0);
    let temp = -Infinity;
    for (let i = 0; i < array.length; i++) {
      const element = array[i];

      if (element && element.left) {
        arr.push(element.left);
      }

      if (element && element.right) {
        arr.push(element.right);
      }

      if (element.val) {
        temp = Math.max(element.val, temp);
      } else {
        temp = Math.max(0, temp);
      }
    }

    result.push(temp);
  }

  return result;
};
