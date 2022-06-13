/* 冒泡排序 */
// 4, 5, 6, 3, 2, 1

function bubble(array) {
  for (let i = 0; i < array.length; i++) {
    let change = false;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        change = true;
      }
    }

    if (!change) {
      break;
    }
  }

  return array;
}

export default bubble;