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

List.prototype.getLastKNode = function (lastKIndex) {
  if (lastKIndex < 1) {
    return null;
  }

  let index = 1;
  let pre = this.head, current = this.head;

  while (index < lastKIndex && current.next !== null) {
    current = current.next;
    index += 1;
  }

  if (index < lastKIndex) {
    return null;
  }

  while (current.next !== null) {
    current = current.next;
    pre = pre.next;
  }

  return pre.value;
};

let list = new List();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);

console.log(list.getLastKNode(1));
console.log(list.getLastKNode(2));
console.log(list.getLastKNode(3));
console.log(list.getLastKNode(4));
console.log(list.getLastKNode(5));
console.log(list.getLastKNode(6));
console.log(list.getLastKNode(7));

console.log(list.getLastKNode(8));
console.log(list.getLastKNode(0));

