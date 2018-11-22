import React from 'react'
import { Timeline,Spin } from 'antd';
import axios from "axios/index";

class Topics extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            loading: false
        }
    }
    componentDidMount() {
        this.setState({
            loading:true
        });
        axios.get(`/api`)
            .then(res => {
                console.log(res.data.topics);
                this.setState({
                    data:res.data.topics,
                    loading: false
                })
            });
    }
    render() {
        return (
            <div className="aTopics">
                <Spin spinning={this.state.loading} tip="Loading...">
                    <Timeline>
                        {
                            this.state.data.map((item,index)=>(
                                <Timeline.Item key={index}>{item.name}{item.date}</Timeline.Item>
                            ))
                        }
                    </Timeline>
                </Spin>
            </div>
        );
    }
}

export default Topics