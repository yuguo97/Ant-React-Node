/* eslint-disable */
import React from 'react'
import axios from 'axios';
import { Table, Divider, Tag , Pagination } from 'antd';
import Breadcrumb from "./../../components/Breadcrumb";
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
        <span>
            {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
    ),
},{
    title: 'Action',
    key: 'action',
    render: () => (
        <span>
            <a href="javascript:;">添加</a>
            <Divider type="vertical" />
            <a href="javascript:;">删除</a>
        </span>
    ),
}];


class Tab extends React.Component {
    constructor(props){
        super(props);
        this.state={
            columns:columns,
            data:[],
            loading: false,
            current:1,
            total:0
        }
    }
    componentDidMount() {
        this.setState({
            loading:true
        });
        axios.get(`/api`)
            .then(res => {
                console.log(res.data.tab);
                this.setState({
                    data:res.data.tab,
                    loading:false,
                    total:res.data.tab.length
                })
            });
    }

    render() {
        return (
            <div className="aTable">
                <Breadcrumb name="表格数据"></Breadcrumb>
                <div className="Content">
                    <Table columns={this.state.columns} dataSource={this.state.data} loading={this.state.loading} pagination={false} />
                    <Pagination defaultCurrent={this.state.current} total={this.state.total} showTotal={total => `总数据 ${total} 条`} />
                </div>
            </div>
        );
    }
}

export default Tab