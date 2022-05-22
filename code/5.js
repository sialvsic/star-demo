/*
10 个 Ajax 同时发起请求，全部返回展示结果，并且至多允许三次失败，说出设计思路
*/

const request = (url) => {
  const Ajax = new XMLHttpRequest();
  Ajax.open('get', url)
  Ajax.onreadystatechange((event) => {
    if (Ajax.readyState === 4) {
      console.log(Ajax.response);
    }
  })
  Ajax.send(null)
}

const list = [
  'http://localhost:3000/test/1',
  'http://localhost:3000/test/2',
  'http://localhost:3000/test/3',
  'http://localhost:3000/test/4',
  'http://localhost:3000/test/5',
  'http://localhost:3000/test/6',
  'http://localhost:3000/test/7',
  'http://localhost:3000/test/8',
  'http://localhost:3000/test/9',
  'http://localhost:3000/test/10',
]


const send = async (list) => {
  let success = 0;
  let fail = 0;

  const requestList = []

  for (let index = 0; index < list.length; index++) {
    const url = list[index];

    const p = new Promise((resolve, reject) => {
      const Ajax = new XMLHttpRequest();
      Ajax.open('get', url)
      Ajax.onreadystatechange = (() => {
        if (Ajax.readyState === 4) {
          // console.log(Ajax.response);
          // console.log(Ajax.status);
          if (Ajax.status === 200) {
            success++;
            resolve({
              success: true,
              data: 1
            })
          } else {
            fail++;
            resolve({    //<== 此处不要使用reject
              success: false,
              data: 'error'
            })
          }
        }
      })
      Ajax.send(null)
    })

    requestList.push(p)
  }

  const r = await Promise.all(
    requestList
  ).catch((error) => {
    console.log('promise error', error)
    return '不会运行到此处'
  })

  return {
    data: r,
    success,
    fail
  };
}

async function run() {
  const { data, success, fail } = await send(list)

  console.log('success', success);
  console.log('fail', fail);
  console.log('data', data);
}

run()