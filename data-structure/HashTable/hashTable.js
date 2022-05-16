function HashTable() {
  this.table = [];
}

HashTable.prototype.loseloseHashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }

  return hash % 37;
};

HashTable.prototype.hashCode = function (key) {
  return this.loseloseHashCode(key);
};

HashTable.prototype.put = function (key, value) {
  let hashKey = this.hashCode(key);
  this.table[hashKey] = value;
};

HashTable.prototype.get = function (key) {
  return this.table[this.hashCode(key)];
};

HashTable.prototype.remove = function (key) {
  return this.table[this.hashCode(key)] = undefined;
};

//处理散列表中的冲突
//处理冲突有几种方法：分离链接，线性探查和双散列法



let hash = new HashTable();
console.log(hash.loseloseHashCode('12344'));
