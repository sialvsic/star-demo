/* 归并排序 */
// 4, 5, 6, 3, 2, 1

function mergeSort(arr) {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }

  let middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length)
    result.push(left.shift());

  while (right.length)
    result.push(right.shift());

  return result;
}

export default mergeSort;

/*
const array = [10, 8, 6, 4, 2, 1];
const expect_array = [1, 2, 4, 6, 8, 10];
const result = mergeSort(array)

console.log(result);
*/