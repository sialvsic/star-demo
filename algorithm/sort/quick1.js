/* 快速排序 */
// 4, 5, 6, 3, 2, 1

function quick(array) {
  quickSort(array, 0, array.length - 1);
  return array;
}

function quickSort(array, left, right) {
  if (left > right) {
    return;
  }

  let q = partition(array, left, right);

  quickSort(array, left, q - 1);
  quickSort(array, q + 1, right);
  // return array;
}

function partition(array, start, end) {
  let pivot = array[start];
  let left = start;
  let right = end;

  while (left !== right) {
    //右指针
    while (left < right && array[right] > pivot) {
      right--;
    }

    while (left < right && array[left] <= pivot) {
      left++;
    }

    if (left < right) {
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
    }
  }

  let p = array[left];
  array[left] = array[start];
  array[start] = p;

  return left;
}

let before_sort = [7, 6, 5, 3, 2, 1, 4];

quick(before_sort);
console.log(before_sort);