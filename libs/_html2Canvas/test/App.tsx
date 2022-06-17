import React from "react";
import { Tabs, Tag } from "antd";
import BadImg from "./BadImg";
import BasicImg from "./BasicImg";
import "antd/dist/antd.css";
import "./App.less";
import CanvasImg from "./CanvasImg";

const { TabPane } = Tabs;

function App() {
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className="container">
      <div>
        <Tag color="volcano">
          <a href="https://github.com/tsayen/dom-to-image">dom-to-image</a>
        </Tag>
        <Tag color="blue">
          <a href="https://html2canvas.hertzen.com/configuration">
            html2canvas
          </a>
        </Tag>
      </div>
      <Tabs onChange={onChange} type="card" defaultActiveKey="2">
        <TabPane tab="基础" key="1">
          <BasicImg />
        </TabPane>
        <TabPane tab="基于Canvas" key="2">
          <CanvasImg />
        </TabPane>
        <TabPane tab="Background Img 模糊问题" key="3">
          <BadImg />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
