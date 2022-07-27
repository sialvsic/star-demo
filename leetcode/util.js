function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const nums = [1, 2, 3, 4, 5];

function getLinkList(arr) {
  let head = null;

  let _arr = arr.reverse();

  for (let i = 0; i < _arr.length; i++) {
    const item = _arr[i];
    if (!head) {
      head = new ListNode(item, null);
    } else {
      head = new ListNode(item, head);
    }
  }

  console.log("head", JSON.stringify(head));

  return head;
}

// getLinkList(nums);

module.exports = {
  getLinkList,
};
