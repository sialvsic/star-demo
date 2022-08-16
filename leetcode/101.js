// 101. 对称二叉树 https://leetcode.cn/problems/symmetric-tree/

const symmetricalTree = {
  val: 8,
  left: {
    val: 6,
    left: { val: 5, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
  right: {
    val: 6,
    left: { val: 7, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
};

//非对称二叉树
const binaryTree = {
  val: 8,
  left: {
    val: 6,
    left: { val: 5, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
  right: {
    val: 6,
    left: { val: 7, left: null, right: null },
    right: { val: 6, left: null, right: null },
  },
};

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return false;
  }

  function dfs(left, right) {
    if (!left && !right) {
      return true;
    }

    if (!left || !right) {
      return false;
    }

    if (left.val !== right.val) {
      return false;
    }

    return dfs(left.left, right.right) && dfs(left.right, right.left);
  }

  return dfs(root, root);
};

const root = [1, 2, 2, 3, 4, 4, 3];
// const r = isSymmetric(root);

// 测试
console.log(isSymmetric(symmetricalTree)); //对称
console.log(isSymmetric(binaryTree)); //不对称
