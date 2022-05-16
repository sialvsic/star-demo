//链表 - 单向链表
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

List.prototype.insert = function (position, element) {
  if (position >= 0 && position <= this.length) {
    const node = new Node(element);
    let index = 0;
    let current = this.head;
    let previous;

    if (position === 0) {
      node.next = current.next;
      this.head = node;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
    }
    this.length++;
  } else {
    throw new Error('position is not valid');
  }
};

List.prototype.removeAt = function (position) {
  if (position >= 0 && position <= this.length) {
    let index = 0;
    let previous;
    let current = this.head;

    if (position === 0) {
      this.head = this.head.next;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length--;
    return current.element;
  } else {
    throw new Error('position is not valid');
  }
};

List.prototype.indexOf = function (element) {
  let index = 0;
  let current = this.head;
  while (current !== null) {
    if (current.element === element) {
      return index;
    }
    index++;
    current = current.next;
  }

  return -1;
};

List.prototype.remove = function (element) {
  const index = this.indexOf(element);
  return this.removeAt(index);
};

List.prototype.isEmpty = function () {
  return this.length === 0;
};

List.prototype.size = function () {
  return this.length;
};

List.prototype.getHead = function () {
  return this.head;
};

List.prototype.clear = function () {
  this.length = 0;
  this.head = null;
};

let list = new List();
list.add(0);
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.insert(6, 20);

console.log(list.length);
console.log(list.indexOf(2));
console.log(list.indexOf(20));
