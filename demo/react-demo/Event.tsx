import React, { useEffect } from "react";

export default function Event() {
  useEffect(() => {
    const root = document.querySelectorAll("#root")[0]; //新版的事件在root上而非document上
    root.addEventListener("click", () => {
      console.log("root click");
    });
  }, []);

  const click = (e) => {
    console.log("e", e);
    console.log("click");

    e.stopPropagation(); //阻止事件冒泡
    // e.nativeEvent.stopImmediatePropagation();
    // e.nativeEvent.stopPropagation();
    // e.preventDefault();
  };

  const rootClick = () => {
    console.log("rootClick");
  };

  return (
    <div>
      root
      <div onClick={rootClick}>
        <div>
          <div>
            <button onClick={click}> click me</button>
          </div>
        </div>
      </div>
    </div>
  );
}
