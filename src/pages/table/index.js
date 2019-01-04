/* eslint-disable */
import React from 'react'

import Breadcrumb from "./../../components/Breadcrumb";
import TableTwo from "./../../components/Tables/yTableTwo"


class Tables extends React.Component {

    render() {
        return (
            <div className="aTable">
                <Breadcrumb name="表格数据" />
                <div className="Content">
                    <TableTwo></TableTwo>
                </div>
            </div>
        );
    }
}

export default Tables;