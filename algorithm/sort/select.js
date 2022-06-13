/* 选择排序 */
// 4, 5, 6, 3, 2, 1

function select(array) {

  for (let index = 0; index < array.length; index++) {

    //每一次的第一个元素
    const element = array[index];

    let minValue = element;
    let minIndex = index;

    for (let j = index; j < array.length; j++) {
      const element = array[j];
      if (element < minValue) {
        minValue = element;
        minIndex = j
      }
    }

    array[minIndex] = element
    array[index] = minValue;
  }

  return array;
}

export default select;