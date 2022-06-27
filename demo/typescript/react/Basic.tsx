import React, { useEffect, useState } from "react";
import "./Basic.less";

export default function Basic() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("useEffect");
  }, []);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <div className="prefix">
      <div className="box">
        <input type="text" value={inputValue} onChange={onInputChange} />
      </div>
    </div>
  );
}
