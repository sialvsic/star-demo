//注意结构赋值，属性重命名和TS定义类型之间的区别
const demoObject = { a: 13, b: 'uuu' }
//  destructure and to set type or give default value for an object
let { a: firstType, b: secondType } = demoObject;
// ------------------------------------------------------
// equal to
// let firstType = demoObject.a;
// let secondType = demoObject.b;
// ------------------------------------------------------
// correct code
// let { a: firstValue=44, b: secondValue }:{a:any,b:string} = demoObject;
