import React from "react";
import { Tabs, Tag } from "antd";
import Basic from "./Basic";
import "antd/dist/antd.css";
import "./App.less";

const { TabPane } = Tabs;

function App() {
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className="container">
      <Tabs onChange={onChange} type="card" defaultActiveKey="0">
        <TabPane tab="基础" key="0">
          <Basic />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
