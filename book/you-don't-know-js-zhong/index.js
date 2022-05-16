//EventLoop 模拟事件循环
let eventLoop = [];
let event;

while(true) {
  if(eventLoop.length > 0) {
    event = eventLoop.shift();

    try {
      event();
    } catch(e) {
      throw Error();
    }
  }
}


//竞态
var a = 20;

function foo() {
  a = a + 1;
}

function bar() {
  a = a + 2;
}

ajax('url1', foo);
ajax('url2', bar);


//协作
var res = [];

function response(data) {
  var chunk = data.splice(0, 1000);

  res = res.concat(chunk.map((val) => {
    return val * 2
  }));

  if(data.length > 0) {
    setTimeout(() => {
      response(data)
    }, 0)
  }

}

ajax('url1', response)
ajax('url2', response)
