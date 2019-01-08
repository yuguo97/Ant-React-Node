import React from 'react'
import { Spin } from 'antd';
import Breadcrumb from "../../components/Breadcrumb";
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import "echarts/lib/chart/line";
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

import axios from "axios/index";

import './index.css'
function getLine(data){
    var myChart = echarts.init(document.getElementById("ygLine"));
    var option = {
        xAxis: {
            type: 'category',
            data: data.name
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: data.number,
            type: 'line'
        }]
    };
    window.onresize = myChart.resize;
    myChart.setOption(option);
}

class About extends React.Component {
    constructor(props){
        super(props);
        this.state={
            loading: false
        }
    }
    componentDidMount() {
        this.setState({
            loading:true
        });
        axios.get(`http://127.0.0.1:8551/wsdl/ChinaTV/getAreaDataSet`).then(res => {
          this.setState({ loading: false });
            var results = res.data.result
            var data = {
                name: [],
                number: []
            };
            for(var i = 0; i<results.length;i++){
                data.name.push(results[i].Area);
                data.number.push(results[i].number);
            }
            getLine(data);
        });
    }
    render() {
        return <div className="aAbout">
            <Breadcrumb name="图表数据" username ="系统设置"/>
            <div className="Content">
              <Spin tip="Loading..." spinning={this.state.loading}>
                <div id="ygLine" className="line" />
              </Spin>
            </div>
          </div>;
    }
}

export default About