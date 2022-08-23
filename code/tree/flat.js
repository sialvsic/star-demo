// json 扁平化

let data = [
  { id: 1, title: "标题1", parent_id: 0 },
  {
    id: 2,
    title: "标题2",
    parent_id: 0,
    children: [
      {
        id: 3,
        title: "标题2-1",
        parent_id: 2,
        children: [
          {
            id: 4,
            title: "标题3-1",
            parent_id: 3,
            children: [{ id: 5, title: "标题4-1", parent_id: 4 }],
          },
        ],
      },
      { id: 6, title: "标题2-2", parent_id: 2 },
    ],
  },
];

function flat1(data) {
  return data.reduce((pre, cur) => {
    // console.log(cur);
    //此处将对象的children属性和值都解构在空数组中，将对象的其他属性和值都解构在i里面。
    const { children = [], ...i } = cur; // 注意 ...i 只能写在解构赋值的末尾，否则报错
    // console.log(i);
    // // console.log(children);
    return pre.concat([{ ...i }], flat(children)); //利用递归回调,数组合并,注意此处 {...i}是解构
  }, []);
}

function flat(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    const { children, ...item } = data[i];

    if (item) {
      arr.push(item);
    }

    if (Array.isArray(children)) {
      arr = arr.concat(flat(children));
    }
  }

  return arr;
}

console.log(flat(data));

/*
[
  { id: 1, title: '标题1', parent_id: 0 },
  { id: 2, title: '标题2', parent_id: 0 },
  { id: 3, title: '标题2-1', parent_id: 2 },
  { id: 4, title: '标题3-1', parent_id: 3 },
  { id: 5, title: '标题4-1', parent_id: 4 },
  { id: 6, title: '标题2-2', parent_id: 2 }
]
*/
