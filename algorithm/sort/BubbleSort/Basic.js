// 冒泡排序
function bubble(newArray, count = 0) {
  const arr = newArray.concat();
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = length - 1; j >= i; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
      count++;
    }
  }

  return { arr, count };
}

// const before_sort = [1, 5, 100, 102, 1, 3, 4, 77, 6, 2, 3, 4, 7, 9, 0];

const arr0 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 10, 9, 8, 7, 6];
const arr3 = [1, 2, 5, 7, 4, 3, 6, 8, 9, 10];

const { arr: result0, count: count0 } = bubble(arr0);
const { arr: result1, count: count1 } = bubble(arr1);
const { arr: result2, count: count2 } = bubble(arr2);
const { arr: result3, count: count3 } = bubble(arr3);

console.log('old array:', arr0);
console.log('new array0:', result0, 'count number:', count0);
console.log('new array1:', result1, 'count number:', count1);
console.log('new array2:', result2, 'count number:', count2);
console.log('new array3:', result3, 'count number:', count3);

/*
old array: [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
new array0: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] count number: 54
new array1: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] count number: 54
new array2: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] count number: 54
new array3: [ 0, 1, 2, 4, 5, 6, 7, 8, 9, 10 ] count number: 54
* */
