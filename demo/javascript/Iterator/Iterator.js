//添加一个Iterator接口
const obj = {
  name: 'this is a object without iterator'
};

// for (let value of obj) {
//  console.log(value)
//  TypeError: obj is not iterable
// }

const obj_iterator = {
  name: 'this is a object without iterator',
  test: '100',
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        let keys = Object.keys(this);
        return index < keys.length ? {
          done: false,
          value: this[keys[index++]]
        } : {
          done: true
        }
      }
    }
  }
};

for (let v of obj_iterator) {
  console.log(v)
}
