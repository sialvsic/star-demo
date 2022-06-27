import React, { useEffect } from "react";
import Throttle from "./throttle";
import Debounce from "./debounce";
import { Tabs } from "antd";
const { TabPane } = Tabs;

function Function() {
  return (
    <div className="lodash">
      <div className="box">
        <Tabs type="card" defaultActiveKey="0" destroyInactiveTabPane>
          <TabPane tab="截流" key="0">
            <Throttle />
          </TabPane>
          <TabPane tab="防抖" key="1">
            <Debounce />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Function;
