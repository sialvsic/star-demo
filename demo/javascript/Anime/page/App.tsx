import { useState } from "react";
import Mask from "./Mask";
import "./index.less";

function App() {
  const [isShow, setIsShow] = useState(false);

  const onClick = () => {
    console.log("next");
    setIsShow(true);
    return;
  };

  const updateShow = () => {
    setIsShow(false);
  };

  return (
    <div id="fullpage">
      <div className="page page1">
        <div className="p1">
          <div className="p1-enter">
            <div className="p1-t1" onClick={onClick}>
              进入
            </div>
            <div className="p1-t2">请打开声音</div>
          </div>
        </div>
      </div>
      <div className="page other">Some section2</div>
      <div className="page other">Some section3</div>
      <div className="page other">Some section4</div>
      <Mask isShow={isShow} updateShow={updateShow} />
    </div>
  );
}

export default App;
