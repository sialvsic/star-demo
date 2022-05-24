/**
 * 数组扁平化
 */

/**
 * 本题主要递归思想
 *
 */

// findType('') => 'string'
// findType(0) => 'number'
// findType(false) => 'boolean'
// findType({}) => 'object'
// findType([]) => 'array'
// ....

function findType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

const arr1 = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10, [11, 12, 13], 14]], 15];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//方法1
function flatMap(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[index];

    if (Array.isArray(item)) {
      newArray = newArray.concat(method(item));
    } else {
      newArray = newArray.concat(item);
    }
  }
  return newArray;
}

// 方法2
function flatMap(arr) {
  //利用ES6提供的flat方法
  return arr.flat(Infinity);
}

console.log(flatMap(arr1));
console.log(JSON.stringify(arr2) === JSON.stringify(flatMap(arr1)));
