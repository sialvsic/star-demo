//链表 - 双向链表
function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.add = function (element) {
  let node = new Node(element);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }
  this.length++;
};

//return new List
DoublyLinkedList.prototype.reverse = function () {
  let newDoublyLinkedList = new DoublyLinkedList();
  let current = this.tail;
  while (current !== null) {
    newDoublyLinkedList.add(current.element);
    current = current.previous;
  }

  return newDoublyLinkedList;
};

//reverse itself
DoublyLinkedList.prototype.reverse2 = function () {
  let newHead = this.tail;
  let newNext = this.tail;

  if (this.head === null || this.tail === null) {
    return;
  }

  let prev = this.tail.previous;

  while (prev !== null) {
    newNext.previous = newNext.next;
    newNext.next = prev;
    prev = prev.previous;

    newNext = newNext.next;
  }

  this.head = newHead;
  this.tail = newNext;
};

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.add(1);
doublyLinkedList.add(2);
doublyLinkedList.add(3);
doublyLinkedList.add(4);

doublyLinkedList.reverse2();
console.log(doublyLinkedList);


