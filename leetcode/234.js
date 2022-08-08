// 234. 回文链表 https://leetcode.cn/problems/palindrome-linked-list/

// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const arr = [];
  let p1 = head;
  while (p1 != null) {
    arr.push(p1);
    p1 = p1.next;
  }

  for (let i = 0; i < arr.length / 2; i++) {
    const item = arr[i];
    const last = arr[arr.length - 1 - i];
    if (item.val !== last.val) {
      return false;
    }
  }

  return true;
};
