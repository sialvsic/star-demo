// 102. 二叉树的层序遍历 https://leetcode.cn/problems/binary-tree-level-order-traversal/

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  let arr = [];
  let result = [];
  arr.push(root);

  while (arr.length !== 0) {
    const element = arr.splice(0);
    let temp = [];
    console.log("arr", arr);
    console.log("element", element);

    for (let i = 0; i < element.length; i++) {
      const item = element[i];
      if (item.left) {
        temp.push(item.left.val);
        arr.push(item.left);
      }

      if (item.right) {
        temp.push(item.right.val);
        arr.push(item.right);
      }
    }

    if (temp.length != 0) {
      result.push(temp);
    }
  }

  return result;
};
