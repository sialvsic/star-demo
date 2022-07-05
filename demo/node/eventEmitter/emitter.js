//event emitter.js 文件
var events = require("events");

var emitter = new events.EventEmitter();

emitter.on("someEvent", function (arg1, arg2) {
  console.log("listener1", arg1, arg2);
});

emitter.on("someEvent", function (arg1, arg2) {
  console.log("listener2", arg1, arg2);
});

emitter.addListener("dd1", () => {
  console.log("1");
});
emitter.addListener("dd1", () => {
  console.log("2");
});
emitter.addListener("dd1", () => {
  console.log("3");
});
emitter.addListener("dd1", () => {
  console.log("4");
});
emitter.addListener("dd1", () => {
  console.log("5");
});
emitter.addListener("dd1", () => {
  console.log("6");
});
emitter.addListener("dd1", () => {
  console.log("7");
});
emitter.addListener("dd1", () => {
  console.log("8");
});
emitter.addListener("dd1", () => {
  console.log("9");
});
emitter.addListener("dd1", () => {
  console.log("10");
});
emitter.addListener("dd1", () => {
  console.log("11");
});

emitter.setMaxListeners(5);
const maxListener = emitter.getMaxListeners();

emitter.emit("someEvent", "arg1 参数", "arg2 参数");
emitter.emit("dd1");

console.log("maxListener", maxListener);
console.log("all Listener", emitter.eventNames());
