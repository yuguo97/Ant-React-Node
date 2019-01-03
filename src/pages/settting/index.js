/* eslint-disable */
import React from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import YPie from "../../components/Charts/yChartPie";
import YTableOne from "../../components/Tables/yTableOne";


function callback(key) {
    console.log(key);
}
class Setting extends React.Component{
    render(){
        return <div>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Tab 1" key="1">
                    <YTableOne></YTableOne>
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                    <YTableOne></YTableOne>
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                    <YPie></YPie>
              </TabPane>
            </Tabs>
          </div>;
    }
}
export default Setting;