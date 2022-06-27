import React from "react";
import { Tabs } from "antd";
import Function from "./Function";
import "antd/dist/antd.css";
import "./App.less";

const { TabPane } = Tabs;

function App() {
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className="container lodash">
      <Tabs onChange={onChange} type="card" defaultActiveKey="0">
        <TabPane tab="函数" key="0">
          <Function />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
