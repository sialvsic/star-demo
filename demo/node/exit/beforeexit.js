let hasSend = false;

process.on("beforeExit", () => {
  if (hasSend) return; // 避免死循环

  setTimeout(() => {
    console.log("mock send data to serve");
    hasSend = true;
  }, 500);
});

console.log(".......");
// 输出：
// .......
// mock send data to serve