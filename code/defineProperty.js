/* 
实现一个 obj={a:0} 每次取属性 a值+1
*/

const obj = {
  a: 0
}

let sum = 0

Object.defineProperty(obj, 'a', {
  get() {
    return sum++
  }
})

console.log(obj.a);
console.log(obj.a);
console.log(obj.a);