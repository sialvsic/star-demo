/* 插入排序 */
// 4, 5, 6, 3, 2, 1

//方式一：好
function insert(array) {

  for (let index = 1; index <= array.length - 1; index++) {
    const element = array[index];
    let j = index - 1;

    for (; j >= 0; j--) {
      if (array[j] > element) {
        array[j + 1] = array[j]
      } else {
        break;
      }
    }
    array[j + 1] = element;
  }

  return array;
}

//方式二：不好，因为不是原地排序的算法
function insert1(array) {
  let temp_array = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const length = temp_array.length;

    for (let j = 0; j <= length; j++) {
      const ele = temp_array[j];

      if (temp_array.length === 0 || j === length) {
        temp_array.push(element);
      }

      if (element <= ele) {
        temp_array.splice(j, 0, element);
        break;
      }

    }
  }
  return temp_array
}

export {
  insert,
  insert1
};