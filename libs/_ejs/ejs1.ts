import Koa from "koa";
import path from "path";
import ejs from "ejs";

function render(
  ctx: Koa.ParameterizedContext<Koa.DefaultState, Koa.DefaultContext, any>,
  next: Koa.Next
) {
  // const fileName1 = path.resolve(__dirname + "/index.ejs");
  // const fileName1 = path.resolve(__dirname + "/layout.ejs");
  // const fileName1 = path.resolve(__dirname + "/all.ejs");

  const pathname = ctx.request.path;
  console.log(ctx.req.url);
  console.log("pathname", pathname);

  const fileName1 = path.resolve(__dirname + "/temp.ejs");

  ejs.renderFile(fileName1, { name: 123 }, {}, function (err: any, str: any) {
    // str => Rendered HTML string

    console.log("err", err);
    console.log("str", str);

    ctx.response.body = str;
  });
}

export default render;
