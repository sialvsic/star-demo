// json 转 树结构

const obj = {
  name: "star",
  age: 28,
  children: [
    {
      name: "s1",
      age: "100",
    },
    {
      name: "s2",
      age: "200",
    },
    [
      {
        name: "s3",
        age: "300",
      },
    ],
  ],
};

function generate(obj) {
  let string = "";
  function bfs(obj, num) {
    let arr = [obj];
    while (arr.length !== 0) {
      const item = arr.shift();
      if (Array.isArray(item)) {
        let space = "";

        for (let i = 0; i < num; i++) {
          space += "    ";
        }
        string += space + "└──children: \n";
        for (let index = 0; index < item.length; index++) {
          const element = item[index];
          bfs(element, num + 1);
        }
      } else if (typeof item === "object") {
        let count = 0;
        for (let key in item) {
          const value = item[key];
          if (Array.isArray(value)) {
            arr.push(value);
          } else {
            let space = "";
            for (let i = 0; i < num; i++) {
              space += "    ";
            }
            count++;
            const keys = Object.keys(item);
            if (count === keys.length) {
              string += `${space}└──${key}: ${value}\n`;
            } else {
              string += `${space}├──${key}: ${value}\n`;
            }
          }
        }
      }
    }
  }

  bfs(obj, 0);

  return string;
}

/*
预期：

├──name: star
├──age: 28
└──children
    ├── name: s1
    └── age: 100
    ├── name: s2
    └── age: 200

*/

const r = generate(obj);
console.log(r);

// console.log(JSON.stringify(obj));
