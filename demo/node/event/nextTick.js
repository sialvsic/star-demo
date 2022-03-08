setTimeout(function () {
  console.log("第一个1秒");
  process.nextTick(function () {
    console.log("第一个1秒：nextTick");
  });
}, 1000);

setTimeout(function () {
  console.log("第2个1秒");
}, 1000);

console.log("我要输出1");

process.nextTick(function () {
  console.log("nextTick");
});

console.log("我要输出2");


/*我要输出1
我要输出2
nextTick
第一个1秒
第一个1秒：nextTick
第2个1秒
*/