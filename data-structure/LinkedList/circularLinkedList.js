//链表 - 循环链表
function Node(element) {
  this.element = element;
  this.next = null;
}

function CircularLinkedList() {
  this.length = 0;
  this.head = null;
}

CircularLinkedList.prototype.add = function(element) {
  const node = new Node(element);
  let current = this.head;
  if(this.head === null) {
    this.head = node;

  } else {
    while (current.next !== this.head) {
      current = current.next;
    }
    current.next = node;
  }
  node.next = this.head;
  this.length++;
};

CircularLinkedList.prototype.insert = function(position, element) {
  let node = new Node(element);
  if(position >= 0 && position <= this.length) {
    let current = this.head;
    let index = 0;
    let previous;

    if(position === 0) {
      if(this.length === 0) {
        this.head = node;
        node.next = this.head;
      } else {
        node.next = current;
        while (current.next !== this.head) {
          current = current.next;
        }
        this.head = node;
        current.next = this.head;
      }
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
      if(node.next === null) { //在最后一个元素更新
        node.next = this.head;
      }
    }
  } else {
    throw new Error('position is not valid');
  }
};

CircularLinkedList.prototype.removeAt = function(position) {
  if(position >= 0 && position < this.length) {
    let current = this.head,
      previous,
      index = 0;

    if(position === 0) {
      while (current.next !== this.head) {
        current = current.next;
      }
      this.head = this.head.next;
      current.next = this.head; //更新最后一项

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
    return null;
  }
};

CircularLinkedList.prototype.indexOf = function(element) {
  let current = this.head,
    index = -1;
  if(element === current.element) {
    return 0;
  }
  index++;
  while (current.next !== this.head) {
    if(element === current.element) {
      return index;
    }
    current = current.next;
    index++;
  }
  if(element === current.element) {
    return index;
  }
  return -1;
};

CircularLinkedList.prototype.remove = function(element) {
  const index = this.indexOf(element);
  return this.removeAt(index);
};

CircularLinkedList.prototype.isEmpty = function() {
  return this.length === 0;
};

CircularLinkedList.prototype.size = function() {
  return this.length;
};

CircularLinkedList.prototype.getHead = function() {
  return this.head;
};

CircularLinkedList.prototype.clear = function() {
  this.length = 0;
  this.head = null;
};

const circularLinkedList = new CircularLinkedList();
circularLinkedList.add(1);
circularLinkedList.add(2);
circularLinkedList.add(3);
circularLinkedList.add(4);
circularLinkedList.add(5);
circularLinkedList.add(6);
circularLinkedList.insert(2, 200);

console.log(circularLinkedList);
