setTimeout(() => {
  console.log(5);
}, 0);

new Promise((resolve) => {
  console.log(1);
  // debugger;
  resolve(3);
  Promise.resolve().then(() => {
    console.log(4);
  });
}).then((num) => {
  console.log(num);
});

console.log(2);

//=> 1 2 4 3 5

(10).add(10).substract(2).add(10);

// => 28

function f(value) {
  this.value = value;
}

f.prototype.add = function (num) {
  this.value += num;
  return this;
};

f.prototype.substract = function (num) {
  this.value -= num;
  return this;
};

console.log(new f(10).add(10).substract(2).add(10));

/*****  分隔符  *****/
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

// 顺序：
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

chrome: requestAnimationFrame在setTimeout前
safari: requestAnimationFrame在setTimeout后
firefox: requestAnimationFrame在setTimeout后
*/

/*****  分隔符  *****/
