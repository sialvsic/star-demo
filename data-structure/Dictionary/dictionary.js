//字典
function Dictionary() {
  this.item = {};
}

Dictionary.prototype.set = function (key, value) {
  this.item[key] = value;
};

Dictionary.prototype.has = function (key) {
  return this.item.hasOwnProperty(key);
};

Dictionary.prototype.remove = function (key) {
  if (this.has(key)) {
    delete this.item[key];
    return true;
  }
  return false;
};

Dictionary.prototype.get = function (key) {
  return this.has(key) ? this.item[key] : undefined;
};

Dictionary.prototype.clear = function (key) {
  this.item = {};
};

Dictionary.prototype.size = function (key) {
  return Object.keys(this.item).length;
};

Dictionary.prototype.keys = function (key) {
  return Object.keys(this.item);
};

Dictionary.prototype.values = function (key) {
  return Object.values(this.item);
};

export default Dictionary;
