/* eslint-disable */
import React from 'react'

import Breadcrumb from "./../../components/Breadcrumb";
import TableTwo from "./../../components/Tables/yTableTwo"

import "./index.css";
class Tables extends React.Component {

    render() {
        return <div className="aTable">
            <Breadcrumb name="表格数据" username="系统设置" />
            <div className="Content">
              <TableTwo />
            </div>
          </div>;
    }
}

export default Tables;