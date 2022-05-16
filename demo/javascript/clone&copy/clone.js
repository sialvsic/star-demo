// 实现一个浅拷贝
function shallowCopy(src) {
  let dst = {};
  for (let prop in src) {
    if (src.hasOwnProperty(prop)) {
      dst[prop] = src[prop];
    }
  }
  return dst;
}

let copy = shallowCopy({
  name: '123',
  test: {
    good: true,
  },
});

console.log(copy);
