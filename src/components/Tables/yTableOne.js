/* eslint-disable */
import React from 'react'
import axios from 'axios';
import { Table, Divider,Pagination } from 'antd';
const columns = [
  {
    title: "name",
    dataIndex: "name",
    key: "name",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "url",
    dataIndex: "url",
    key: "url"
  },
  {
    title: "alexa",
    dataIndex: "alexa",
    key: "alexa"
  },
  {
    title: "country",
    dataIndex: "country",
    key: "country"
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <span>
        <a href="javascript:;">修改</a>
        <Divider type="vertical" />
        <a href="javascript:;">添加</a>
        <Divider type="vertical" />
        <a href="javascript:;">删除</a>
      </span>
    )
  }
];


class yTableOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: columns,
            data: [],
            loading: false,
            current: 1,
            total: 0
        }
    }
    componentDidMount() {
        this.setState({
            loading: true
        });
        axios.get(`http://localhost:6551/api/Websites`).then(res => {
            console.log(res.data.result);
          this.setState({
            data: res.data.result,
            loading: false,
            total: res.data.result.length
          });
        });
    }

    render() {
        return (
            <div className="aTableone">
                <Table columns={this.state.columns} dataSource={this.state.data} loading={this.state.loading} pagination={false} rowKey="id"  />
                <Pagination defaultCurrent={this.state.current} total={this.state.total} showTotal={total => `总数据 ${total} 条`} />
            </div>
        );
    }
}

export default yTableOne;