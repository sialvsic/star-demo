//集合
function _Set() {
  this.item = {};
}

_Set.prototype.size = function() {
  // return Object.keys(this.item).length
  //or
  let count = 0;
  for (let props in this.item) {
    if(this.item.hasOwnProperty(props)) {
      count++;
    }
  }

  return count;
};

_Set.prototype.has = function(value) {
  return this.item.hasOwnProperty(value);
};

_Set.prototype.add = function(value) {
  if(!this.has(value)) {
    this.item[value] = value;
  }
};

_Set.prototype.clear = function() {
  this.item = {};
};

_Set.prototype.keys = function() {
  let result = [];
  for (let key in this.item) {
    if(this.item.hasOwnProperty(key)) {
      result.push(key);
    }
  }
  return result;
};

_Set.prototype.values = function() {
  let result = [];
  for (let key in this.item) {
    if(this.item.hasOwnProperty(key)) {
      result.push(this.item[key]);
    }
  }
  return result;
};

_Set.prototype.delete = function(value) {
  if(this.has(value)){
    delete this.item[value]
  }
};

_Set.prototype.entries = function(value) {
  if(this.has(value)){
    delete this.item[value]
  }
};

//标准Set
//size
//has
//add
//clear
//keys
//values
//delete
//entries
//forEach

let _s = new _Set();
_s.add(1);
_s.add(2);
_s.add(2);
console.log(_s.values());
console.log(_s.keys());

let s = new Set();
s.add(1);
s.add({name: 1});
console.log(s.entries());
console.log(s.size);
