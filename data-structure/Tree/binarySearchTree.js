/*
二叉搜索树
二叉树中的节点最多只能有两个节点：
一个是左侧子节点，另一个是右侧子节点。
二叉搜索树（BST）是二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值，
在右侧节点存储（比父节点）大（或者等于）的值
*/

function BinarySearchTree() {
  var Node = function (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };

  let root = null;

  function insertNode(node, newNode) {
    if (newNode.value < node) {  //这里是关键，比较的是值
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  }

  this.insert = function (value) {
    let newNode = new Node(value);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  this.getRoot = function () {
    return root;
  };

  function searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (value < node.value) {
      return searchNode(node.left, value);
    } else if (value > node.value) {
      return searchNode(node.right, value);
    } else {
      return true;
    }
  }

  this.search = function (value) {
    return searchNode(root, value);
  };

  function minNode(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.value;
    }

    return null;
  }

  this.min = function () {
    return minNode(root);
  };

  function maxNode(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }

      return node.value;
    }

    return null;

  }

  this.max = function () {
    return maxNode(root);
  };

  function findMinNode(node) {
    while (node && node.left !== null) {
      node = node.left;
    }

    return node;
  }

  function removeNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = removeNode(node.right, value);
      return node;
    } else { //命中分为三种情况

      //移除叶子节点 即该节点没有左侧或者右侧子节点的叶节点
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right; //把引用改为子节点的引用
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      //移除有两个子节点的节点
      let minNode = findMinNode(node.right); //找到右边子树的最小节点
      node.value = minNode.value; //改变节点的键，更新节点的值
      node.right = removeNode(node.right, minNode.value);  //移除有相同键的节点
      return node; //返回更新后的节点的引用
    }
  }

  this.remove = function (value) {
    root = removeNode(root, value);
  };
}
