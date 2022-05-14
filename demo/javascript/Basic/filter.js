// 数组去重
const arr1 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
const arr2 = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr1.indexOf(arr1[i]) === i) {
    arr2.push(arr1[i]);
  }
}

console.log(arr2);

const arr3 = [...new Set(arr1)];
console.log(arr3);
