/* eslint-disable */
import React from 'react'
import { DatePicker } from "antd";
import Breadcrumb from "./../../components/Breadcrumb";
import TableOne from "./../../components/Tables/yTableOne"
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
import "./index.css";


function onStartChange(date, dateString) {
    console.log(date, dateString);
}
function onEndChange(date, dateString) {
  console.log(date, dateString);
}

class Tables extends React.Component {

    render() {
        return <div className="aTable">
            <Breadcrumb name="表格数据" username="系统设置" />
            <div className="Content">
              <div className="DatePickerOne">
                    <DatePicker onChange={onStartChange} placeholder="开始时间" />
                    <DatePicker onChange={onEndChange} placeholder="结束时间" />
              </div>
              <TableOne />
            </div>
          </div>;
    }
}

export default Tables;