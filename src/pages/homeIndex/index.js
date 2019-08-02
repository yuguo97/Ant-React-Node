import React from 'react';
import YPie from "../../components/Charts/yChartPie";
import {
    Row,
    Col,
    Card
} from 'antd';
import './index.css'




class HomeIndex extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount() {

    }
    render() {
        return (
        <div className="aHome">
            <div className="Content" >
                <Row>
                    <Col span = {8}>
                        < div style = {
                            {
                                width: "100%",
                                padding:10,
                                height:550
                            }
                        } >
                            <Card
                            title = "饼图"
                            style = {{width: "100%","height":"100%"}}
                            >
                                < YPie />
                            </Card>
                        </div>
                    </Col>
                    <Col span = {8}>

                    </Col>
                </Row>
            </div>
        </div>
        )
    }
}

export default HomeIndex