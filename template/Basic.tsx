import React, { useEffect, useState } from "react";
import "./Basic.less";

export default function Basic() {
  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div className="prefix">
      <div className="box">box1</div>
    </div>
  );
}
