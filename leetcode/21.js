/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

const l1 = [1, 2, 4],
  l2 = [1, 3, 4];

const list1 = appendList(l1);
const list2 = appendList(l2);

// [1,1,2,3,4,4]
const r = mergeTwoLists(list1, list2);
console.log("r", JSON.stringify(r));
