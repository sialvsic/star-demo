import React, { useEffect, useRef, useState } from "react";

const CountDown = ({ number }) => {
  const [n, setN] = useState(number);
  const ref = useRef<any>();
  const ref1 = useRef<number>();

  const tick = () => {
    ref1.current = (ref1.current as number) - 1;

    if (ref1.current >= 0) {
      setN(ref1.current);
    } else {
      clearInterval(ref.current);
    }
  };

  useEffect(() => {
    ref1.current = number;
    ref.current = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(ref.current);
    };
  }, []);

  console.log("render", n);

  return <div>{n}</div>;
};

export default CountDown;
