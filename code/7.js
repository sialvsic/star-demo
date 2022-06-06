/*循环打印红黄绿 
红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次；如何让三个灯不断交替重复亮灯？
*/

function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

function timeout(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function run() {
  while (true) {
    await timeout(3000);
    red();
    await timeout(1000);
    green();
    await timeout(2000);
    yellow();
  }
}

run();
