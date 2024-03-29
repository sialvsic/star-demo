// 160. 相交链表 https://leetcode.cn/problems/intersection-of-two-linked-lists/

/* 
给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let set = new Set();

  let p1 = headA;
  let p2 = headB;
  while (p1 !== null) {
    set.add(p1);
    p1 = p1.next;
  }

  while (p2 !== null) {
    if (set.has(p2)) {
      return p2;
    }
    p2 = p2.next;
  }

  return null;
};
