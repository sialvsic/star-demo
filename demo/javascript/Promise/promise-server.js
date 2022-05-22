const Koa = require('koa');
const app = new Koa();

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
  const path = ctx.request.path;
  console.log('path', path);

  if (path.includes('/test')) {

    const params = path.split('/');
    console.log('params', params);
    const end = params[2];
    if (end < 3) {
      ctx.status = 500;
      ctx.body = {
        order: end
      }
    } else {
      ctx.status = 200
    }
  } else {
    ctx.body = 'Hello World';
  }
});

app.listen(3000, () => {
  console.log('server start port: 3000');
});


const list = [
  'http://localhost:3000/test/1',
  'http://localhost:3000/test/2',
  'http://localhost:3000/test/3',
  'http://localhost:3000/test/4',
  'http://localhost:3000/test/5',
  'http://localhost:3000/test/6',
  'http://localhost:3000/test/7',
  'http://localhost:3000/test/8',
  'http://localhost:3000/test/9',
  'http://localhost:3000/test/10',
]