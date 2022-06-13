/* 快速排序 */
// 4, 5, 6, 3, 2, 1

function quick(array) {
  quickSort(array, 0, array.length - 1);
  return array;
}

function quickSort(array, left, right) {
  if (left >= right) {
    return;
  }

  let q = partition(array, left, right);

  quickSort(array, 0, q - 1);
  quickSort(array, q + 1, right);
}

// 数据结构与算法之美的实现方式
function partition(array, left, right) {
  let pivot = array[right];

  let i = left;
  let j = left;

  while (i < right) {
    if (array[i] > pivot) {
    } else {
      let temp = array[j];
      array[j] = array[i];
      array[i] = temp;
      j++;
    }
    i++;
  }

  let temp = array[j];
  array[right] = temp;
  array[j] = pivot;

  return j;
}

export default quick;

// let before_sort = [7, 6, 5, 3, 2, 1, 4];

// quick(before_sort);
// console.log(before_sort);