/**
数组去重
*/

const arr1 = [1, 6, 6, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
const arr2 = [];

function uniqueArray1(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) === i) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function uniqueArray2(array) {
  return [...new Set(array)];
}

function uniqueArray3(array) {
  let map = {};
  let res = [];

  for (var i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      map[array[i]] = true;
      res.push(array[i]);
    }
  }
  return res;
}

console.log(uniqueArray1(arr1));
console.log(uniqueArray2(arr1));
console.log(uniqueArray3(arr1));
