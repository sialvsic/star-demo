import React, { useEffect } from "react";
import debounce from "lodash/debounce";
import "./debounce.less";

function Debounce() {
  const onScrollDefault = debounce(
    () => {
      console.log("scroll");
    },
    3000,
    {
      leading: false, //指定在延迟开始前调用
      trailing: true, //指定在延迟结束后调用
    }
  );

  const onScrollWithT1 = debounce(
    () => {
      console.log("scroll");
    },
    3000,
    {
      leading: true,
      trailing: true,
    }
  );

  const onScrollWithT2 = debounce(
    () => {
      console.log("scroll");
    },
    3000,
    {
      leading: true,
      trailing: false,
    }
  );

  const onScrollWithT3 = debounce(
    () => {
      console.log("scroll");
    },
    3000,
    {
      leading: false,
      trailing: false,
    }
  );

  useEffect(() => {
    console.log("useEffect");
    // window.addEventListener("scroll", () => {
    //   console.log("scroll"); //多频次调用
    // });

    window.addEventListener("scroll", onScrollDefault); //延迟结束后调用
    // window.addEventListener("scroll", onScrollWithT1); //延迟开始前，结束后都调用
    // window.addEventListener("scroll", onScrollWithT2); //延迟开始前调用
    // window.addEventListener("scroll", onScrollWithT3); //不调用

    return () => {
      window.removeEventListener("scroll", onScrollWithT2);
    };
  }, []);

  return (
    <div className="lodash">
      <div className="box"></div>
    </div>
  );
}

export default Debounce;
