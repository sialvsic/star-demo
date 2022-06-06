/*
数组元素求和
*/

const arr = [1, 2, 3, [[4, 5], 6], 7, 8, 9];

function sum(array) {
  let num = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (typeof element === "number") {
      num = element + num;
    } else {
      num += sum(element);
    }
  }
  return num;
}

console.log(sum(arr));
