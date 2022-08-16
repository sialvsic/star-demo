// 94. 二叉树中序遍历 https://leetcode.cn/problems/binary-tree-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let arr = [];

  if (!root) {
    return arr;
  }

  function dfs(root) {
    if (!root) {
      return null;
    }

    if (root.left) {
      dfs(root.left);
    }

    arr.push(root.val);

    if (root.right) {
      dfs(root.right);
    }
  }

  dfs(root);

  return arr;
};

const root = [1, null, 0, 3];
const r = inorderTraversal(root);
console.log("r", r);
