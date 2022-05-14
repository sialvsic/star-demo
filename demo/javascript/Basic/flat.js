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
  return Object.prototype.toString.call(data).split(' ')[1].slice(0, -1).toLowerCase();
}

const arr1 = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10, [11, 12, 13], 14]], 15];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//方法1
function method(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (findType(arr[i]) === 'array') {
      newArray = newArray.concat(method(arr[i]));
    } else {
      newArray = newArray.concat(arr[i]);
    }
  }
  return newArray;
}

// 方法2
function method(arr) {
  //利用ES6提供的flat方法
  return arr.flat(Infinity);
}

console.log(method(arr1));
console.log(JSON.stringify(arr2) === JSON.stringify(method(arr1)));
