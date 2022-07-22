/* 两数相加 
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头

https://leetcode.cn/problems/add-two-numbers/
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

function getLength(l) {
  if (!l) {
    return 0;
  }

  let sum = 1;

  while (l && l.next !== null) {
    l = l.next;
    sum = sum + 1;
  }

  return sum;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let flag = 0;
  const length1 = getLength(l1);
  const length2 = getLength(l2);
  const max = Math.max(length1, length2);

  let arr = [];
  let l = null;

  let p1 = l1;
  let p2 = l2;

  for (let index = 0; index < max; index++) {
    let v1 = (p1 && p1.val) || 0;
    let v2 = (p2 && p2.val) || 0;
    let result = v1 + v2 + flag;

    //进位计算
    if (result >= 10) {
      result = result - 10;
      flag = 1;
    } else {
      flag = 0;
    }

    if (p1) {
      p1 = p1.next;
    }

    if (p2) {
      p2 = p2.next;
    }

    arr.push(result);
  }

  if (flag == 1) {
    arr.push(1);
  }

  l = appendList(arr);

  return l;
};

// const l1 = [2, 4, 3],
//   l2 = [5, 6, 4, 2];

const l1 = [9, 9, 9, 9, 9, 9, 9],
  l2 = [9, 9, 9, 9];

const list1 = appendList(l1);
const list2 = appendList(l2);

//[7,0,8] 342 + 465 = 807
//[7,0,8] 342 + 2465 = 2807

const r = addTwoNumbers(list1, list2); //[7,0,8]
console.log("r", JSON.stringify(r));
