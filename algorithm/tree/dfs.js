/*
深入优先遍历 这里以树为例
方法1：递归实现

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
        { val: 5, children: null, color: 'white' },
        {
          val: 6, children: [
            { val: 10, children: null, color: 'white' },
            { val: 11, children: null, color: 'white' }
          ], color: 'white'
        }
      ],
      color: 'white'
    },
    {
      val: 3,
      children: [
        { val: 7, children: null, color: 'white' }
      ], color: 'white'
    },
    {
      val: 4,
      children: [
        { val: 8, children: null, color: 'white' },
        { val: 9, children: null, color: 'white' }
      ],
      color: 'white'
    }
  ],
  color: 'white'
};

const list = [];

function dfs(tree) {

  if (!tree) {
    return;
  }

  if (tree.children !== null) {
    const { children, val } = tree;
    for (let index = 0; index < children.length; index++) {
      const element = children[index];
      if (element.children === null) {
        list.push(element.val);
      } else {
        dfs(element)
      }
    }
  }

  if (tree.val) {
    list.push(tree.val)
  }
}

dfs(tree);
console.log('list', list);