// 24. 两两交换链表中的节点 https://leetcode.cn/problems/swap-nodes-in-pairs/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) {
    return null;
  }

  let helper = function (node) {
    let tempNext = node.next;
    if (tempNext) {
      let tempNextNext = node.next.next;
      node.next.next = node;

      if (tempNextNext) {
        node.next = helper(tempNextNext);
      } else {
        node.next = null;
      }
    }
    return tempNext || node;
  };

  let res = helper(head);

  return res || head;
};

const head = [1, 2, 3, 4];

const r = swapPairs(head);
console.log("r", r);
