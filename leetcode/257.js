// 257. 二叉树的所有路径 https://leetcode.cn/problems/binary-tree-paths/

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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const paths = [];
  const helper = (root, path) => {
    if (root) {
      path += root.val.toString();
      if (root.left === null && root.right === null) {
        // 当前节点是叶子节点
        paths.push(path); // 把路径加入到答案中
      } else {
        path += "->"; // 当前节点不是叶子节点，继续递归遍历
        construct_paths(root.left, path);
        construct_paths(root.right, path);
      }
    }
  };

  helper(root, "");
  return paths;
};

var binaryTreePaths = function (root) {
  let res = [];
  if (!root) {
    return res;
  }

  if (!root.left && !root.right) {
    return [`${root.val}`];
  }

  let leftPaths = binaryTreePaths(root.left);
  let rightPaths = binaryTreePaths(root.right);

  leftPaths.forEach((leftPath) => {
    res.push(`${root.val}->${leftPath}`);
  });
  rightPaths.forEach((rightPath) => {
    res.push(`${root.val}->${rightPath}`);
  });

  console.log("res", res);
  // res [ '2->5' ]
  // res [ '1->2->5', '1->3' ]

  return res;
};
