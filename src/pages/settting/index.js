/* eslint-disable */
import React from 'react';
import { Tabs, Empty, LocaleProvider } from 'antd';
const TabPane = Tabs.TabPane;
import YPie from "../../components/Charts/yChartPie";
import YTableTwo from "../../components/Tables/yTableTwo";
import zhCN from "antd/lib/locale-provider/zh_CN";
// import Breadcrumb from "./../../components/Breadcrumb";

import "./index.css";

function callback(key) {
    console.log(key);
}
class Setting extends React.Component{
    render(){
        return <div>
            {/* <Breadcrumb name="我的消息" /> */}
            <div className="Content">
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="导航1" key="1">
                    <YTableTwo />
                </TabPane>
                <TabPane tab="导航2" key="2">
                  <LocaleProvider locale={zhCN}>
                    <Empty />
                  </LocaleProvider>
                </TabPane>
                <TabPane tab="导航3" key="3">
                    <YPie />
                </TabPane>
              </Tabs>
            </div>
          </div>;
    }
}
export default Setting;