function getUrlParams(url, key) {
  let result = "";
  let _url = url.split("?")[1];
  let arr = _url.split("&");

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const left = element.split("=")[0];
    const right = element.split("=")[1];
    if (left === key) {
      return right;
    }
  }

  result = _url;

  return result;
}

const url =
  "https://juejin.cn/post/6934500357091360781?name=1&name=2&age=18&height=180";

console.log(getUrlParams(url, "height"));
