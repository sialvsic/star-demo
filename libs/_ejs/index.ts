import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import mail from "./mail";

const PORT = process.env.PORT || 3001;
const app = new Koa();

//跨域设置
app.use(cors());

// logger
app.use(async (ctx, next) => {
  // const cookies = ctx.headers.cookie;
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(
    `[${new Date().toUTCString()}] - ${ctx.method} ${ctx.url} - ${rt} - [${
      ctx.status
    }]`
  );
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

// koa body
app.use(bodyParser());

app.use(async (ctx, next) => {
  // ignore favicon
  ctx.body;
  if (ctx.path === "/favicon.ico") return;
  await next();
});

app.use(async (ctx, next) => {
  if (ctx.path === "/mail") {
    mail(ctx, next);
    return;
  }

  await next();
});

// routes
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
