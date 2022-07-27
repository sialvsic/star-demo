const { getLinkList } = require("./util");
// 206. 反转链表 https://leetcode.cn/problems/reverse-linked-list/

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
var reverseList = function (head) {
  let pre = null;
  let cur = head;

  while (cur !== null) {
    let tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }

  return pre;
};

const head = [1, 2, 3, 4, 5];
const nums = getLinkList(head);

const r = reverseList(nums);
console.log("r", JSON.stringify(r));
