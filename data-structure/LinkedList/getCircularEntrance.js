//单向链表
//获取成环位置

function Node(element) {
  this.element = element;
  this.next = null;
}

function List() {
  this.length = 0;
  this.head = null;
}

List.prototype.add = function (element) {
  let node = new Node(element);
  let current;
  if (this.head === null) {
    this.head = node;
  } else {
    current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  this.length++;
};

List.prototype.linkTo = function (index) {
  let current = this.head;
  let sum = 1;
  while (sum < index && current != null) {
    current = current.next;
    sum += 1;
  }

  if (sum < index) {
    return false;
  }

  let tail = current;
  while (tail.next !== null) {
    tail = tail.next;
  }

  tail.next = current;
};

List.prototype.getCircularEntrance = function () {
  let slow = this.head, fast = this.head;

  do {
    slow = slow.next;
    fast = fast.next.next;
  } while (slow !== fast);

  slow = this.head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.element;
};

List.prototype.getCircularLength = function () {
  let slow = this.head, fast = this.head;

  do {
    slow = slow.next;
    fast = fast.next.next;
  } while (slow !== fast);

  slow = this.head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  let entrance = slow;
  let length = 0;
  do {
    entrance = entrance.next;
    length++;
  } while (entrance !== slow);

  return length;

};

const list = new List();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.add(8);
list.linkTo(4);
console.dir(list);

const entrance = list.getCircularEntrance();
console.log(entrance);
const length = list.getCircularLength();
console.log(length);

// https://www.nowcoder.com/questionTerminal/253d2c59ec3e4bc68da16833f79a38e4
