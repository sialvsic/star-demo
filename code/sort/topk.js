// 题目

// 输入一个 n和k，返回按照字典排序的第K个值

function getTopK(n, k) {
  const arr = new Array(n).fill("");

  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }

  arr.sort(); //默认按照字典排序
  console.log("arr", arr);

  return arr[k];
}

const r = getTopK(15, 6);
console.log("r", r); //15

/*
arr [
  1, 10, 11, 12, 13, 14,
 15,  2,  3,  4,  5,  6,
  7,  8,  9
]
*/

const arr = ["1", "2", "3", "4", "11", "22", "33"];
arr.sort();
console.log(arr);
