const target = {
  name: 100
}

const obj = new Proxy(target, {
  get(source, props) {
    console.log(source, props);
    return source[props]
  },
  set(source, key, val) {
    console.log(source, key, val);
  }
})

console.log(obj.name);
// obj.name = '12'