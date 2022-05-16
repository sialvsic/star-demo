//优先队列

function QueueElement(element, priority) {
  this.element = element;
  this.priority = priority;
}

function PriorityQueue() {
  this.items = [];
}

//入队
PriorityQueue.prototype.push = function(element, priority) {
  let q = new QueueElement(element, priority);
  if(this.isEmpty()) {
    this.items.push(q);
  } else {
    let added = false;
    for(let i = 0; i < this.items.length; i++) {
      //priority值越小的排在前面
      if(q.priority < this.items[i].priority) {
        this.items.splice(i, 0, q);
        added = true;
        break;
      }
    }

    if(!added) {
      this.items.push(q);
    }
  }
};

//出队
PriorityQueue.prototype.pop = function() {
  this.items.shift();
};

//获取队首元素
PriorityQueue.prototype.front = function() {
  return this.items[0]
};

//获取队尾元素
PriorityQueue.prototype.end = function() {
  return this.items[this.items.length - 1]
};

//队列大小
PriorityQueue.prototype.size = function() {
  return this.items.length;
};

//队列否为空
PriorityQueue.prototype.isEmpty = function() {
  return this.items.length === 0;
};

//队列清空
PriorityQueue.prototype.clear = function() {
  return this.items.length = 0;
};

let pq = new PriorityQueue();
pq.push(10, 2);
pq.push(20, 1);
console.log(pq.front()); //20 1
