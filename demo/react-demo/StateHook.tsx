import React, { useEffect, useState } from "react";
import "./StateHook.less";

export default function StateHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(1);
      console.log(count);
      setCount(2);
      console.log(count);

      //count不更新
    });

    console.log("useEffect");
  }, []);

  return (
    <div className="prefix">
      <div className="box">box1111</div>
    </div>
  );
}
