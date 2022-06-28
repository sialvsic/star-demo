import React, { useEffect } from "react";
import "./Basic.less";

export default function Basic() {
  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div className="skeleton">
      <div className="container">
        <div className="box">
          <div className="bg"></div>
          <div className="flex">
            <div className="card">
              <div className="fx animate-pulse">
                <div className="left"></div>
                <div className="right">
                  <div className="line1"></div>
                  <div className="line2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
