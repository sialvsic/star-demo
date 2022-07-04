import React, { useEffect, useState } from "react";
import "./Basic.less";
import Test from "./TestClass";

export default function Basic() {
  useEffect(() => {
    console.log("useEffect");

    //测试装饰器语法
    const test = new Test("star", 18);
    const name = test.getName();
    console.log("name", name);
    const age = test.getAge(); //ts报错
    // console.log("age", age);
    test.setScore(1000);
  }, []);

  return (
    <div className="prefix">
      <div className="box">box1</div>
    </div>
  );
}
