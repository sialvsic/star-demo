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
      name: "username 111",
      avatar:
        "https://cdn.himalaya.com/e8db113534f4478585f51d768bc36190.png?x-oss-process=image/resize,w_300,h_300&auth_key=4102416000-1234-0-3fe5f7f39d02f9a4dde92a3f35555e23",
    },
    trendList: {
      title: "Trending projects",
      list: [
        {
          logo: "https://cdn.himalaya.com/f02ffb7c1a5a41bbbf115b4a3963b1d7.jpg?x-oss-process=image%2Fformat%2Cwebp&auth_key=4102416000-1234-0-d525a4fb586509cd80eaffc8c3730d6e",
          title: "ProjectTitle1",
          desc: "Redefining the social token paradigm via true collective ownership and the invention of 'quantum compounding'.",
          tags: ["#web3", "#blockchaingames", "#fnt"],
        },
      ],
    },
    newList: {
      title: "Projects just for you",
      list: [
        {
          logo: "https://cdn.himalaya.com/f02ffb7c1a5a41bbbf115b4a3963b1d7.jpg?x-oss-process=image%2Fformat%2Cwebp&auth_key=4102416000-1234-0-d525a4fb586509cd80eaffc8c3730d6e",
          title: "ProjectTitle1",
          desc: "Redefining the social token paradigm via true collective ownership and the invention of 'quantum compounding'.",
          tags: ["#web3", "#blockchaingames", "#fnt"],
        },
        {
          logo: "https://cdn.himalaya.com/f02ffb7c1a5a41bbbf115b4a3963b1d7.jpg?x-oss-process=image%2Fformat%2Cwebp&auth_key=4102416000-1234-0-d525a4fb586509cd80eaffc8c3730d6e",
          title: "ProjectTitle2",
          desc: "Redefining the social token paradigm via true collective ownership and the invention of 'quantum compounding'.",
          tags: ["#web3", "#blockchaingames", "#fnt"],
        },
      ],
    },
    messageList: [
      {
        type: "1",
        number: "2",
        title: "ProjectTitle1111",
        users: [
          "https://cdn.himalaya.com/f02ffb7c1a5a41bbbf115b4a3963b1d7.jpg?x-oss-process=image%2Fformat%2Cwebp&auth_key=4102416000-1234-0-d525a4fb586509cd80eaffc8c3730d6e",
          "https://cdn.himalaya.com/f02ffb7c1a5a41bbbf115b4a3963b1d7.jpg?x-oss-process=image%2Fformat%2Cwebp&auth_key=4102416000-1234-0-d525a4fb586509cd80eaffc8c3730d6e",
          "https://cdn.himalaya.com/f02ffb7c1a5a41bbbf115b4a3963b1d7.jpg?x-oss-process=image%2Fformat%2Cwebp&auth_key=4102416000-1234-0-d525a4fb586509cd80eaffc8c3730d6e",
          "https://cdn.himalaya.com/f02ffb7c1a5a41bbbf115b4a3963b1d7.jpg?x-oss-process=image%2Fformat%2Cwebp&auth_key=4102416000-1234-0-d525a4fb586509cd80eaffc8c3730d6e",
          "https://cdn.himalaya.com/f02ffb7c1a5a41bbbf115b4a3963b1d7.jpg?x-oss-process=image%2Fformat%2Cwebp&auth_key=4102416000-1234-0-d525a4fb586509cd80eaffc8c3730d6e",
          "https://cdn.himalaya.com/f02ffb7c1a5a41bbbf115b4a3963b1d7.jpg?x-oss-process=image%2Fformat%2Cwebp&auth_key=4102416000-1234-0-d525a4fb586509cd80eaffc8c3730d6e",
          "https://cdn.himalaya.com/f02ffb7c1a5a41bbbf115b4a3963b1d7.jpg?x-oss-process=image%2Fformat%2Cwebp&auth_key=4102416000-1234-0-d525a4fb586509cd80eaffc8c3730d6e",
          "https://cdn.himalaya.com/f02ffb7c1a5a41bbbf115b4a3963b1d7.jpg?x-oss-process=image%2Fformat%2Cwebp&auth_key=4102416000-1234-0-d525a4fb586509cd80eaffc8c3730d6e",
        ],
        image: "https://alvinzhoutest.cn/blog/Item%201@2x.png",
      },
      {
        type: "3",
        logo: "1313",
        title: "ProjectTitle2",
        desc: "Redefining the social token paradigm via true collective ownership and the invention of 'quantum compounding'.",
        tags: ["#web3", "#blockchaingames", "#fnt"],
      },
    ],
    button: {
      link: "https://www.baidu.com",
      title: "View more",
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
