/*
给一个二叉树，返回所有的根到叶的路径。
例如： 
   1           
 /   \
2     3
 \ 
  5
返回:["1->2->5", "1->3"]
 
请填写以下TODO部分答题，如需其它方法，可自行编写。
*/

function dfs(root) {
  let list = [];
  if (!root.val) {
    return;
  }

  list.push(root.val);

  if (root.left) {
    list = list.concat(dfs(root.left));
  }

  if (root.right) {
    list = list.concat(dfs(root.right));
  }

  return list;
}

function getAllPaths(root) {
  const list = [];
  let leftArray = [];
  let rightArray = [];

  if (!root && !root.val) {
    return list;
  } else {
    leftArray.push(root.val);
    rightArray.push(root.val);
  }

  const left = leftArray.concat(dfs(root.left)); //[1,2,5]
  const right = rightArray.concat(dfs(root.right)); //[1,3]

  const leftString = left.join("->");
  const rightString = right.join("->");
  list.push(leftString);
  list.push(rightString);

  return list;
}

const r = getAllPaths({
  val: "1",
  left: { val: "2", right: { val: "5" } },
  right: { val: "3" },
});

console.log(r);
