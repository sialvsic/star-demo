/*
广度优先遍历 二叉树且求树的深度
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

function bfs(tree) {
  const queue = [];
  const value = [];
  queue.push(tree);
  let index = 0;

  while (queue.length !== 0) {
    const parents = queue.splice(0);

    // 遍历本层的节点
    for (let i = 0, l = parents.length; i < l; i++) {
      let item = parents[i];
      value.push(item.value);

      if (item.left) {
        queue.push(item.left);
      }

      if (item.right) {
        queue.push(item.right);
      }
    }

    index++;
  }

  console.log("index", index);
  return value;
}

console.log(bfs(tree));
