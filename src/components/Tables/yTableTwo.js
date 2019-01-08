/* eslint-disable */
import React from 'react'
import axios from 'axios';
import { Table, Divider, Tag, Pagination } from 'antd';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    align:'center',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
}, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    align: 'center',
    render: tags => (
        <span>
            {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
    ),
}, {
    title: 'Action',
    key: 'action',
    align: 'center',
    render: () => (
        <span>
            <a href="javascript:;">添加</a>
            <Divider type="vertical" />
            <a href="javascript:;">删除</a>
        </span>
    ),
}];

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
        axios.get(`/api`)
            .then(res => {
                // console.log(res.data.tab);
                this.setState({
                    data: res.data.tab,
                    loading: false,

                })
            });
        }
    render() {
        return <div className="yTableTwo">
            <Table columns={this.state.columns} dataSource={this.state.data} loading={this.state.loading} bordered/>
          </div>;
    }

}

export default yTableTwo;