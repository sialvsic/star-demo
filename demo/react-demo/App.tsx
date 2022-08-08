import React from "react";
import { Tabs } from "antd";
import StateHook from "./StateHook";
import StateClass from "./StateClass";
import UseLayout from "./UseLayout";
import "antd/dist/antd.css";
import "./App.less";

const { TabPane } = Tabs;

function App() {
  const onChange = (key: string) => {
    // console.log(key);
  };

  return (
    <div className="container">
      <Tabs
        onChange={onChange}
        type="card"
        defaultActiveKey="0"
        destroyInactiveTabPane
      >
        <TabPane tab="setState hook" key="0">
          <StateHook />
        </TabPane>
        <TabPane tab="setState class" key="1">
          <StateClass />
        </TabPane>
        <TabPane tab="use layout" key="2">
          <UseLayout />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
