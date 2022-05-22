/*
深入优先遍历 这里以多叉树为例
方法2：利用堆栈的特性

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
        { val: 5, children: null, color: "white" },
        {
          val: 6,
          children: [
            { val: 10, children: null, color: "white" },
            { val: 11, children: null, color: "white" },
          ],
          color: "white",
        },
      ],
      color: "white",
    },
    {
      val: 3,
      children: [{ val: 7, children: null, color: "white" }],
      color: "white",
    },
    {
      val: 4,
      children: [
        { val: 8, children: null, color: "white" },
        { val: 9, children: null, color: "white" },
      ],
      color: "white",
    },
  ],
  color: "white",
};

function dfs(tree) {
  let stack = [];
  let order = [];

  (function travel(node) {
    node.color = "gray";
    stack.push(node);

    if (!node.children) {
      node.color = "black";
      let popNode = stack.pop();
      order.push(popNode.val);
      return;
    }

    node.children.forEach(function (child) {
      travel(child);
    });

    node.color = "black";
    let popNode = stack.pop();
    order.push(popNode.val);
  })(tree);

  return order;
}

console.log(dfs(tree));
