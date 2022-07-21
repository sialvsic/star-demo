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
  const fileName1 = path.resolve(__dirname + "/mail.ejs");

  const context = {
    project: {
      title: "🔥 New projects picked just for you",
      subTitle: "Check out these recommended projects for you.",
    },
    user: {
      name: "username 111,",
      logo: "https://cdn.himalaya.com/e8db113534f4478585f51d768bc36190.png?x-oss-process=image/resize,w_300,h_300&auth_key=4102416000-1234-0-3fe5f7f39d02f9a4dde92a3f35555e23",
    },
  };

  ejs.renderFile(fileName1, context, {}, function (err: any, str: any) {
    // str => Rendered HTML string

    console.log("err", err);
    console.log("str", str);

    ctx.response.body = str;
  });
}

export default render;
