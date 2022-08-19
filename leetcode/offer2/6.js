// 剑指 Offer 06. 从尾到头打印链表 https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/

var reversePrint = function (head) {
  if (!head) return [];
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr.reverse();
};
