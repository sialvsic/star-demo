/*
广度优先遍历 这里以树为例
利用队列的特性

定义三种颜色: 白灰黑
白色，未遍历
灰色, 遍历但是未处理
黑色，已经处理过了

// 定义一个树的结构
type tree {
  value,
  children,
  color,
}
 */

const tree = {
  val: 1,
  children: [
    {
      val: 2,
      children: [
        {val: 5, children: null, color: 'white'},
        {val: 6, children: null, color: 'white'}
      ],
      color: 'white'
    },
    {
      val: 3,
      children: [
        {val: 7, children: null, color: 'white'}
      ], color: 'white'
    },
    {
      val: 4,
      children: [
        {val: 8, children: null, color: 'white'},
        {val: 9, children: null, color: 'white'}
      ],
      color: 'white'
    }
  ],
  color: 'white'
};

function bfs(tree) {
  let queue = [];
  let order = [];
  queue.push(tree);

  while (queue.length !== 0) {
    let node = queue.shift();
    order.push(node.val);

    if (!node.children) {
      continue;
    }

    node.children.forEach(function (child) {
      queue.push(child);
    })
  }

  return order;
}

console.log(bfs(tree));