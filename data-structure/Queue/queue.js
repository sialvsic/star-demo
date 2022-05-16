function queue() {
  this.items = []
}

//进队
queue.prototype.push = function(item) {
  this.items.push(item)
};

//出队
queue.prototype.pop = function() {
  return this.items.shift()
};

//获取队首元素
queue.prototype.front = function() {
  return this.items[0]
};

//获取队尾元素
queue.prototype.end = function() {
  return this.items[this.items.length - 1]
};

//队列大小
queue.prototype.size = function() {
  return this.items.length;
};

//队列否为空
queue.prototype.isEmpty = function() {
  return this.items.length === 0;
};

//队列清空
queue.prototype.clear = function() {
  return this.items.length = 0;
};


let q = new queue();
q.push(0);
q.push(1);
q.push(2);
q.push(3);
console.log(q.front());
console.log(q.end());
