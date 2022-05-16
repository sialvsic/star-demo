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

DoublyLinkedList.prototype.add = function(element) {
  let node = new Node(element);
  if(this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }
  this.length++;
};

DoublyLinkedList.prototype.insert = function(position, element) {
  let node = new Node(element);
  if(position >= 0 && position <= this.length) {
    let index = 0;
    let previous;
    let current = this.head;
    if(position === 0) {
      if(this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = current;
        current.previous = node;
        this.head = node;
      }
    } else if(position === this.length) {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      current.previous = node;
      node.previous = previous;
      previous.next = node;
    }
  } else {
    throw new Error('position is not valid');
  }
};

DoublyLinkedList.prototype.removeAt = function(position) {
  if(position >= 0 && position <= this.length) {
    let index = 0;
    let previous;
    let current = this.head;

    if(position === 0) {

      if(this.head === null) {
        return null;
      } else if(this.head.next === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.previous = null;
      }
    } else if(position === length) {
      this.tail = this.tail.previous;
      this.tail.next = null;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      current.next.previous = previous;

    }
    this.length--;
    return current.element;
  } else {
    throw new Error('position is not valid');
  }
};

DoublyLinkedList.prototype.indexOf = function(element) {
  let current = this.head;
  let index = -1;
  if(element === current.element) {
    return 0;
  }
  index++;
  while (current.next !== null) {
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

DoublyLinkedList.prototype.remove = function(element) {
  const index = this.indexOf(element);
  return this.removeAt(index);
};

DoublyLinkedList.prototype.isEmpty = function() {
  return this.length === 0;
};

DoublyLinkedList.prototype.size = function() {
  return this.length;
};

DoublyLinkedList.prototype.getHead = function() {
  return this.head;
};

DoublyLinkedList.prototype.getTail = function() {
  return this.tail;
};

DoublyLinkedList.prototype.clear = function() {
  this.length = 0;
  this.head = null;
  this.tail = null;
};

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.add(1);
doublyLinkedList.add(2);
doublyLinkedList.add(3);
doublyLinkedList.add(4);
doublyLinkedList.add(5);
doublyLinkedList.add(6);
doublyLinkedList.insert(2, 200);

console.log(doublyLinkedList);
