// 2. 两数相加 https://leetcode.cn/problems/add-two-numbers/

/*
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头
*/

/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function appendList(nums) {
  let l,
    next = null;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (l) {
      let tmp = new ListNode(element, null);
      l.next = tmp;
      l = l.next;
    } else {
      l = new ListNode(element, null);
      next = l;
    }
  }

  return next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let addOne = 0;
  let flag = (cur = new ListNode(0));

  while (addOne || l1 || l2) {
    let val1 = l1 !== null ? l1.val : 0;
    let val2 = l2 !== null ? l2.val : 0;
    let sum = val1 + val2 + addOne;

    addOne = sum >= 10 ? 1 : 0;

    cur.next = new ListNode(sum % 10);
    cur = cur.next;

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  return flag.next;
};

const l1 = [2, 4, 3],
  l2 = [5, 6, 4, 2];

// const l1 = [9, 9, 9, 9, 9, 9, 9],
//   l2 = [9, 9, 9, 9];

const list1 = appendList(l1);
const list2 = appendList(l2);

//[7,0,8] 342 + 465 = 807
//[7,0,8] 342 + 2465 = 2807

const r = addTwoNumbers(list1, list2); //[7,0,8,2]
console.log("r", JSON.stringify(r));
