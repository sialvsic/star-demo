//父子进程通信

const { fork } = require("child_process");
const forked = fork("./fork.js");

forked.on("message", (msg) => {
  console.log("message from child", msg);
});

forked.on("exit", function (code, signal) {
  console.log(
    "child process exited with" + `code ${code} and signal ${signal}`
  );
});

forked.on("close", function (code, signal) {
  //比exit晚执行
  console.log("child process close with" + `code ${code} and signal ${signal}`);
});

forked.send({ hello: "world" });

process.on("close", function name(params) {
  //无此事件
  console.log("main process close");
});

process.on("exit", function name(params) {
  console.log("main process exit");
});

process.on("uncaughtException", function name(error, origin) {
  console.log("err", error);
  console.log("origin", origin);
});

process.on("message", function name(message) {
  console.log("main message:", message);
});
