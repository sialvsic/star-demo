import ReactDOM from "react-dom/client";
import App from "./App";

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);

// 实现一个页面切换的效果
// 参考：https://juejin.cn/post/6995335027911295006
// Github: https://github.com/hezhongfeng/music163-demo/blob/master/src/components/mask/src/index.vue
