import React from 'react';
import Breadcrumb from "./../../components/Breadcrumb";
import { Collapse } from 'antd';
import axios from "axios/index";
import './index.css'
const Panel = Collapse.Panel;

function callback(key) {
    console.log(key);
}

class HomeIndex extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
    }
    componentDidMount() {
        axios.get(`/api`)
            .then(res => {
                // console.log(res.data.home);
                this.setState({
                    data:res.data.home,
                })
            });
    }
    render() {
        return (
        <div className="aHome">
            <Breadcrumb name="首页数据" />
            <div className="Content">
                <Collapse defaultActiveKey={["1"]} onChange={callback} accordion>
                    {this.state.data.map(item => (
                        <Panel header={item.name} key={item.key}>
                            <p>{item.text}</p>
                        </Panel>
                    ))}
                </Collapse>
            </div>
        </div>
        )
    }
}

export default HomeIndex