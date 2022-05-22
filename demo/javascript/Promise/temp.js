async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

requestAnimationFrame(() => {
  // 注意这个函数
  console.log("requestAnimationFrame");
});

async1();

new Promise((resolve) => {
  console.log("promise");
  resolve();
}).then(() => {
  console.log("then");
});

console.log("script end");

/*
script start
async1 start
async2
promise
script end
async1 end
then

requestAnimationFrame
setTimeout
*/
