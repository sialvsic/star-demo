// 543. 二叉树的直径 https://leetcode.cn/problems/diameter-of-binary-tree/

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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let height = 0;

  function helper(node) {
    if (node === null) return 0;

    let left = helper(node.left),
      right = helper(node.right);

    height = Math.max(left + right, height);
    return Math.max(left, right) + 1;
  }

  helper(root);

  return height;
};
