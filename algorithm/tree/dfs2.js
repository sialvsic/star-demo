/*
深度优先遍历 
二叉树
*/

const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: {
        value: 8,
        left: null,
        right: null,
      },
      right: {
        value: 9,
        left: null,
        right: null,
      },
    },
    right: {
      value: 5,
      left: {
        value: 10,
        left: null,
        right: null,
      },
      right: {
        value: 11,
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: {
        value: 12,
        left: null,
        right: null,
      },
      right: {
        value: 13,
        left: null,
        right: null,
      },
    },
    right: {
      value: 7,
      left: {
        value: 14,
        left: null,
        right: null,
      },
      right: {
        value: 15,
        left: null,
        right: null,
      },
    },
  },
};

// 前序遍历 根左右
// 中序遍历 左根右
// 后序遍历 左右根

function dfs(tree) {
  const value = [];
  function travel(node) {
    // value.push(node.value); // 前序遍历 根左右

    if (node.left) {
      travel(node.left);
    }

    value.push(node.value); //中序遍历 左根右

    if (node.right) {
      travel(node.right);
    }

    // value.push(node.value); 后序遍历 左右根
  }

  travel(tree);
  return value;
}

console.log(dfs(tree));
