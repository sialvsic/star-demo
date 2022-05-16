// 一个基本的迭代器的实现
function Iterator(arr) {
  let index = 0;

  return {
    next: function () {
      return index < arr.length ? {
        value: arr[index++],
        done: false,
      } : {
        value: arr[arr.length - 1],
        done: true,
      };
    },
  };
}

let arr = [1, 4, 'ads'];// 准备一个数据
let iteratorObj = Iterator(arr);

console.log(iteratorObj.next()); // 所有的迭代器对象都拥有next()方法，会返回一个结果对象
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
