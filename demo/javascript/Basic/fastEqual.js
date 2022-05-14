/**
 * 1.fastEqual
 *
 * 示例输入: a = { arr: [1, 2], num: 12 } b = { arr: [1, 2], num: 12 }
 *
 * 示例输出: true
 *
 * tips: 不需要考虑太多边界情况, 优先保证执行效率, 输入 a / b 可以是任意数据类型
 */

/**
 * 本题主要考察对象的比较，注意对象的类型存在基本类型和引用类型
 *
 */

// findType('') => 'string'
// findType(0) => 'number'
// findType(false) => 'boolean'
// findType({}) => 'object'
// findType([]) => 'array'
// ....

function findType(data) {
  return Object.prototype.toString.call(data).split(' ')[1].slice(0, -1).toLowerCase();
}

const a = {arr: [1, 2], num: 12, o: {name: 'foo',}};
const b = {arr: [1, 2], o: {name: 'foo'}, num: 12};
const c = {arr: [{name: 1}, 2], o: {name: 'foo'}, num: 12};
const d = {arr: [{name: 1}, 2], o: {name: 'foo'}, num: 12};

function fastEqual(a, b) {

  //声明标记默认为相等
  let isEqual = true;

  //简单类型比较直接使用===即可
  if(findType(a) === 'string' || findType(a) === 'number' || findType(a) === 'boolean') {
    return a === b;
  }

  //对于复杂类型分别处理
  //判断对象
  if(findType(a) === 'object') {
    const keys = Object.keys(a);
    for (let i = 0; i < keys.length; i++) {
      return fastEqual(a[i], b[i]);
    }
  }

  //判断是不是数组
  if(findType(a) === 'array') {
    for (let i = 0; i < a.length; i++) {
      return fastEqual(a[i], b[i]);
    }
  }
  return isEqual;
}

console.log(fastEqual(a, b));
console.log(fastEqual(c, d));