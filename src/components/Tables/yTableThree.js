/* eslint-disable */
import React from 'react'
import axios from 'axios';
import { Table, Divider, Tag, Pagination } from 'antd';

const columns = [
    {
        title: "姓名",
        dataIndex: "USERNAME",
        key: "USERNAME",
        align: "center",
        render: text => <a href="javascript:;">{text}</a>
    },
    {
        title: "年龄",
        dataIndex: "AGE",
        key: "AGE",
        align: "center"
    },
    {
        title: "密码",
        key: "PASSWORD",
        dataIndex: "PASSWORD",
        align: "center"
    },
    {
        title: "电话",
        dataIndex: "PHONE",
        key: "PHONE",
        align: "center"
    },
    {
        title: "操作",
        key: "action",
        align: "center",
        render: () => (
            <span>
                <a href="javascript:;">修改</a>
                <Divider type="vertical" />
                <a href="javascript:;">删除</a>
            </span>
        )
    }
];

class yTableTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: columns,
            data: [],
            loading: false,

        }
    }
    componentDidMount() {
        this.setState({
            loading: true
        });
        axios
            .get(`http://localhost:5551/api/LoginUser/`)
            .then(res => {
                console.log(res.data.result);
                this.setState({
                    data: res.data.result,
                    loading: false
                });
            });
    }
    render() {
        return <div className="yTableThree">
                <Table columns={this.state.columns} dataSource={this.state.data} loading={this.state.loading} bordered rowKey="ID"/>
            </div>;
    }

}

export default yTableTwo;