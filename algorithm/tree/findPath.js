function flattenObj(data) {
  let res = {};
  function helper(obj, prefix) {
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        const element = obj[i];
        helper(element, `${prefix}[${i}]`);
      }
    } else if (typeof obj === "object") {
      for (let j in obj) {
        helper(obj[j], prefix ? `${prefix}.${j}` : `${j}`);
      }
    } else {
      res[prefix] = obj;
    }
  }

  helper(data, "");

  return res;
}

function isObj(obj) {
  return obj !== null && (typeof obj === "object" || typeof obj === "function");
}

/*
{
  a: 1,
  'b.c.d[0]': 1,
  'b.c.d[1]': 2,
  'b.c.d[2]': 3,
  'b.c.e[0].f': 1,
  g: 1
}
*/

function findPath(obj, target) {
  const path = flattenObj(obj);
  console.log("path", path);
  let res = [];

  for (const i in path) {
    if (Object.hasOwnProperty.call(path, i)) {
      const value = path[i];
      if (value === target) {
        res.push("<root>." + i);
      }
    }
  }

  return res;
}

const obj = {
  a: 1,
  b: {
    c: {
      d: [1, 2, 3],
      e: [
        {
          f: 1,
        },
      ],
    },
  },
  g: 1,
};

console.log(findPath(obj, 1)); // [ '<root>.a', '<root>.b.c.d[0]', '<root>.b.c.e[0].f', '<root>.g' ]
