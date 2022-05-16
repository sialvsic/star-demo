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
  var obj = sPackage.split('.');
  return find(oNamespace, obj.length, obj)
}

function find(oNamespace, length, obj) {
  console.log(oNamespace, length, obj);

  if(length <= 0) {
    return { [obj[obj.length - length]]: {} };
  }


  if(oNamespace !== Object(oNamespace)) {
    const temp = { [obj[obj.length - length]]: {} };
    console.log('temp');
    console.log(temp);
    return oNamespace[find(temp, length - 1, obj)]
  } else if(length >= 0) {
    return oNamespace[obj.length - length] = {};
  }

  return oNamespace[find(oNamespace[obj[obj.length - length]], length - 1, obj)];
}

const result = namespace({ a: { test: 1, b: 2 } }, 'a.b.c.d');
console.log(result);

// return oNamespace[obj.length - length] = {};
