/*
{
  a: {
    b: "hello ",
    c: {
      d: "world",
    },
  },
  e: "hello world",
}

// 转换为
{
  'a.b': 'hello',
  'a.c.d': 'hello world',
  'e': 'hello world'
}
*/

const obj = {
  a: {
    b: "hello ",
    c: {
      d: "world",
    },
  },
  e: "hello world",
};

function flatObjBFS(obj) {
  let arr = [obj];
  const res = {};
  while (arr.length !== 0) {
    const top = arr.shift();
    const keys = Object.keys(top);

    let pKey = "";
    let pValue = "";

    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      const element = top[key];

      if (typeof element === "object") {
        arr.push(element);
      } else {
        res[key] = element;
      }
    }
  }

  return res;
}

console.log(flatObjBFS(obj)); //结果也不对

/*
//采用深度优先遍历，不满足需求
function flatObjDFS(obj) {
  const res = {};

  function deep(o, prefix = "") {
    const keys = Object.keys(o);

    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      const element = o[key];
      if (typeof element === "string") {
        if (prefix) {
          res[prefix + "." + key] = element.trim();
        } else {
          res[key] = element.trim();
        }
      } else {
        if (prefix) {
          deep(element, prefix + "." + key);
        } else {
          deep(element, key);
        }
      }
    }
  }

  deep(obj);

  return res;
}

console.log(flatObjDFS(obj)); //{ 'a.b': 'hello', 'a.c.d': 'world', e: 'hello world' }
*/
