import React from 'react'
import { Timeline,Spin} from 'antd';
import Breadcrumb from "./../../components/Breadcrumb";
import axios from "axios/index";

import './index.css';

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
                // console.log(res.data.topics);
                this.setState({
                    data:res.data.topics,
                    loading: false
                })
            });
    }
    render() {
        return <div className="aTopics">
            <Breadcrumb name="时间轴数据" username="数据设置" />
            <div className="Content">
              <Spin spinning={this.state.loading} tip="Loading...">
                <Timeline>
                  {this.state.data.map((item, index) => (
                    <Timeline.Item key={index}>
                      {item.name}
                      {item.date}
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Spin>
            </div>
          </div>;
    }
}

export default Topics