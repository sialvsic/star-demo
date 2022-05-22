/*
广度优先遍历 二叉树
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

  while (queue.length !== 0) {
    const item = queue.shift();

    if (item.left) {
      queue.push(item.left);
    }

    if (item.right) {
      queue.push(item.right);
    }

    value.push(item.value);
  }

  return value;
}

console.log(bfs(tree));
