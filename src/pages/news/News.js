import React from 'react'
import { Spin } from 'antd';
import Breadcrumb from "./../../components/Breadcrumb";
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

import axios from "axios/index";

function getPie(data){
    var name=[];
    for(var i=0;i<data.length;i++){
        name.push(data[i].name);
    }
    var myChart = echarts.init(document.getElementById('pie'));
    var option = {
        title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:name
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'outer'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                data:data
            }
        ]
    };
    window.onresize = myChart.resize;
    myChart.setOption(option);
}

class News extends React.Component {
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
        axios.get(`http://192.168.0.116:7553/v3/api`)
            .then(res => {
                this.setState({
                    loading:false
                });
                var resData=res.data.result;
                var data=[];
                for(var  i = 0;i<resData.length;i++){
                    data.push({
                        "name":resData[i].name,
                        "value":resData[i].alexa
                    })
                }
                console.log(data);
                getPie(data);
            });
    }
    render() {
        return (
            <div className="aAbout">
                <Breadcrumb name="图表数据" />
                <div className="Content">
                    <Spin tip="Loading..." spinning={this.state.loading}>
                        <div id="pie" className="pie" />
                    </Spin>
                </div>
            </div>
        )
    }
}



export default News