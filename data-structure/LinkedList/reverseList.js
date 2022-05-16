function Node(value) {
  this.next = null;
  this.value = value;
}

function List() {
  this.head = null;
}

List.prototype.add = function (value) {
  const node = new Node(value);
  if (this.head === null) {
    this.head = node;
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }
};

List.prototype.reverse = function () {

  if (this.head === null || this.head.next === null) {
    return;
  }

  let pre = null, current = this.head, next;

  while (current !== null) {
    next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }

  this.head = pre;

};

let list = new List();
list.add(1);
list.add(2);
list.add(3);
list.add(3);
list.add(4);
list.add(6);
console.log(list);

list.reverse();

console.log(list);
