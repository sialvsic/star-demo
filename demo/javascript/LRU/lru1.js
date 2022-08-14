class LRU {
  constructor(max) {
    this.map = new Map();
    this.maxSize = max;
  }

  get(key) {
    if (this.map.has(key)) {
      const value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    }

    return -1;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    }

    this.map.set(key, value);
    const size = this.map.size;

    if (size > this.maxSize) {
      //删除一个
      const keys = Array.from(this.map.keys());
      const key = keys.shift();
      this.map.delete(key);
    }
  }
}

const lru = new LRU(2);
lru.put(1, 1); // 缓存是 {1=1}
lru.put(2, 2); // 缓存是 {1=1, 2=2}
console.log(lru.get(1)); // 返回 1
lru.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lru.get(2)); // 返回 -1 (未找到)
lru.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lru.get(1)); // 返回 -1 (未找到)
console.log(lru.get(3)); // 返回 3
console.log(lru.get(4)); // 返回 4
