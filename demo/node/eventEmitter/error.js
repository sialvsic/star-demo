var events = require("events");

var emitter = new events.EventEmitter();
emitter.on("error", (...args) => {
  console.log("error11", args);
});

emitter.on("someEvent", function (arg1, arg2) {
  console.log("listener1", arg1, arg2);
  // emitter.emit("error");
  throw new Error("error");
});

const r = emitter.emit("someEvent");
console.log(r);
