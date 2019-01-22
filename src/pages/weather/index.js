import React from 'react'


import Breadcrumb from "./../../components/Breadcrumb";
import axios from "axios/index";

import './index.css';

import { Tree } from "antd";

const { TreeNode } = Tree;


class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: false
        };
    }
    onSelect = (selectedKeys) => {
        console.log('selected', selectedKeys[0]);
        const pra = {
            "theCityCode": selectedKeys[0]
         };
        axios
            .post(`http://localhost:8551/wsdl/Weather/getWeather`, pra)
            .then(res => {
                console.log(res.data);
                // this.setState({
                //     data: res.data.topics,
                //     loading: false
                // });
            });
    }
    componentDidMount() {

    }
    render() {
        return <div className="aWeather">
                <Breadcrumb name="天气设置" username="数据设置" />
                <div className="Content">
                    <Tree showLine defaultExpandedKeys={["湖北"]} onSelect={this.onSelect}>
                        <TreeNode title="中国" key="中国">
                            <TreeNode title="湖北" key="湖北">
                                <TreeNode title="武汉" key="武汉" />
                                <TreeNode title="襄阳" key="襄阳" />
                                <TreeNode title="宜昌" key="宜昌" />
                            </TreeNode>
                            <TreeNode title="广东" key="广东">
                                <TreeNode title="深圳" key="深圳" />
                            </TreeNode>
                            <TreeNode title="湖南" key="湖南">
                                <TreeNode title="长沙" key="长沙" />
                                <TreeNode title="岳阳" key="岳阳" />
                            </TreeNode>
                        </TreeNode>
                    </Tree>
                </div>
            </div>;
    }
}

export default Weather