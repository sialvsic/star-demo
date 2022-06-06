// 原生XMLHttpRequest对象
let req = new XMLHttpRequest();

req.onreadystatechange = function () {
  if (req.readyState === 4) {
    // do something
    // console.log(req.getAllResponseHeaders());
    console.log(req.responseText);
  }
};

req.open("GET", "https://www.baidu.com", true);
req.setRequestHeader("Content-Type", "application/javascript;charset=UTF-8");
// req.send(null)
req.send({
  name: 12,
});
