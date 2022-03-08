process.on("unhandledRejection", (err, promise) => {
  console.log(err.message);
});

Promise.reject(new Error("错误信息")); // 未被catch捕获的异常，交由unhandledRejection事件处理