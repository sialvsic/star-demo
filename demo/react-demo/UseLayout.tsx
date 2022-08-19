import React, { useEffect, useState, useLayoutEffect } from "react";

export default function UseLayout() {
  const [state, setState] = useState("hello world");

  useEffect(() => {
    console.log("useEffect");
    // let i = 0;
    // while (i <= 2000000000) {
    //   i++;
    // }

    setState("world hello");

    return () => {
      console.log("UseLayout  unmount");
    };
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    let i = 0;
    while (i <= 2000000000) {
      i++;
    }

    setState("world hello");
  }, []);

  console.log("state", state);

  return (
    <div className="prefix">
      <div className="box">{state}</div>
    </div>
  );
}
