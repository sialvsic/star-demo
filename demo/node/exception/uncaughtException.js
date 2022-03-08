process.on("uncaughtException", (err, origin) => {
  console.log(err.message);
});

const a = 1 / b;
console.log("abc"); // 不会执行