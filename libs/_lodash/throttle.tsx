import React, { useEffect } from "react";
import throttle from "lodash/throttle";
import "./throttle.less";

function Throttle() {
  const onScrollDefault = throttle(
    () => {
      console.log("scroll");
    },
    3000,
    {
      leading: true, //指定调用在节流开始前
      trailing: true, //指定调用在节流结束后
    }
  );

  const onScrollWithT1 = throttle(
    () => {
      console.log("scroll");
    },
    3000,
    {
      leading: false,
      trailing: true,
    }
  );

  const onScrollWithT2 = throttle(
    () => {
      console.log("scroll");
    },
    3000,
    {
      leading: true,
      trailing: false,
    }
  );

  const onScrollWithT3 = throttle(
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

    // window.addEventListener("scroll", onScrollDefault); //一直调用
    // window.addEventListener("scroll", onScrollWithT1); //调用在节流结束后
    window.addEventListener("scroll", onScrollWithT2); //调用在节流开始前
    // window.addEventListener("scroll", onScrollWithT3); //不调用
    leading: false;

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

export default Throttle;
