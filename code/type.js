/* 题1： 使得以下表达式为true
a == 1 && a == 2 && a == 3
*/

// 方法1: 从vue3的响应式中获取灵感，使用Proxy
let c = new Proxy({ i: 1 }, {
  get(target) {
    console.log('cc', c)
    return () => target.i++
  }
})

console.log(c == 1 && c == 2 && c == 3)

//题2：// 此时的变量b是什么?

var a = { n: 1 }
var b = a
a.x = a = { n: 2 }

/*
分析: 
1. 第二句中， a 和 b 指向了同一个内存地址，此时 a 和 b相等
2. a.x = (a = { n: 2 })
3. a.x = 在内存地址中开辟了新属性 x ，而这个属性 x 指向了后面括号中表达式的返回值 { n: 2 }
4. 最后括号中的表达式 (a = { n: 2 }) 把变量 a 重新赋值为 { n: 2 } 此时变量 a 和变量 b 已经割裂，变量 b 仍然指向原地址
而变量 a 却创建了新对象 { n: 2 } 并作为表达式结果被赋值给了地址 1 中的属性 x ，也就是 b.x 
所以最终对象 b 的值为 { n: 1, x: { n: 2 } } ，并且 b.x === a 为 true
*/

console.log(a) // a: { n: 2 }
console.log(b) // b: { n: 1, x: { n: 2 } }

/*
题3：结果为true还是false
*/

console.log(('b' + 'a' + + 'a' + 'a').toLowerCase() === 'banana') // true
/*
分析:
*/