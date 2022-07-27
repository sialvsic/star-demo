// 104. 二叉树的最大深度 https://leetcode.cn/problems/maximum-depth-of-binary-tree/

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
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const arr = [];
  arr.push(root);
  let index = 0;

  while (arr.length !== 0) {
    const node = arr.splice(0);

    for (let index = 0; index < node.length; index++) {
      const element = node[index];

      if (element.left) {
        arr.push(element.left);
      }

      if (element.right) {
        arr.push(element.right);
      }
    }

    index++;
  }

  return index;
};

const nums = [3, 9, 20, null, null, 15, 7];

const r = maxDepth(nums);
console.log("r", r);
