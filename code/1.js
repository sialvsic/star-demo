/*
题目描述
根据包名，在指定空间中创建对象

输入：
namespace({ a: { test: 1, b: 2 }}, 'a.b.c.d')

输出：
{ a: { test: 1, b: { c: { d: {}}}}}
*/

// a[b[c[d]]]

function namespace(oNamespace, sPackage) {
  const packageName = sPackage.split(".");
  let space = oNamespace;
  let temp = space;
  for (let i = 0; i < packageName.length; i++) {
    const item = packageName[i];

    if (typeof space[packageName[i]] != "object") {
      space[item] = {};
    }
    space = space[item];
  }
  return temp;
}

const result = namespace({ a: { test: 1, b: 2 } }, "a.b.c.d");
console.log("result", result); //{ a: { test: 1, b: { c: { d: {}}}}}
console.log("result", JSON.stringify(result)); //{ a: { test: 1, b: { c: { d: {}}}}}
