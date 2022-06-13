// Node内存泄露

const Koa = require("koa");
const app = new Koa();

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

//以下是产生泄漏的代码
let theThing = null;
function replaceThingBad() {
  let leak = theThing;
  let unused = function () {
    if (leak) console.log("hi");
  };

  console.log("leak", leak);

  // 不断修改theThing的引用
  theThing = {
    longStr: new Array(1000000),
    someMethod: function () {
      console.log("a");
    },
  };
}

function replaceThingGood() {
  let leak = theThing;
  let unused = function (_leak) {
    if (_leak) console.log("hi");
  };

  unused(leak);
  console.log("leak", leak);

  // 不断修改theThing的引用
  theThing = {
    longStr: new Array(1000000),
    someMethod: function () {
      console.log("a");
    },
  };
}

app.use(async (ctx) => {
  const path = ctx.request.path;
  console.log("path", path);

  if (path === "/leak") {
    replaceThingBad();
    // replaceThingGood();
    ctx.status = 200;
    ctx.body = {
      msg: "ok",
    };
  } else {
    ctx.status = 404;
    ctx.body = {
      msg: "not found",
    };
  }
});

app.listen(3000, () => {
  console.log("server start port: 3000");
});

// https://cnodejs.org/topic/58eb5d378cda07442731569f
