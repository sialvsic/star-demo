function partition(arr, startIndex, endIndex) {
  let pivot = arr[startIndex];
  let left = startIndex;
  let right = endIndex;

  while (left !== right) {
    //控制right指针并左移
    while (left < right && arr[right] > pivot) {
      right--;
    }

    //控制left指针比较并右移
    while (left < right && arr[left] <= pivot) {
      left++;
    }

    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }

  let p = arr[left];
  arr[left] = arr[startIndex];
  arr[startIndex] = p;

  return left;
}

function quick_sort(arr, startIndex, endIndex) {
  if (startIndex >= endIndex) {
    return;
  }

  let pivot = partition(arr, startIndex, endIndex);
  console.log("pivot", pivot);
  quick_sort(arr, startIndex, pivot - 1);
  quick_sort(arr, pivot + 1, endIndex);
}

let before_sort = [1, 5, 100, 102, 1, 3, 4, 77, 6, 2, 3, 4, 7, 9, 0];
// let before_sort = [3, 5, 4, 1, 2, 9, 8, 7, 6];

quick_sort(before_sort, 0, before_sort.length - 1);
console.log(before_sort);
