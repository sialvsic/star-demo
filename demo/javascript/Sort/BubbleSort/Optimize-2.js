function bubble(newArray, count = 0) {
  const arr = newArray.concat();
  let length = arr.length;
  let k = 0;
  for (let i = 0; i < length - 1; i++) {
    let flag = true;
    let pos = 0;

    for (let j = length - 1; j >= k; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        flag = false;
        pos = j;
      }
      count++;
    }

    if (flag) {
      return { arr, count };
    }

    k = pos;
  }

  return { arr, count };
}

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
* */
