
import React from 'react';
import { Spin , Card } from 'antd';
import Breadcrumb from "./../../components/Breadcrumb";
import axios from "axios/index";
const { Meta } = Card;

class News extends React.Component {
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
        axios.get(`https://www.apiopen.top/journalismApi`)
            .then(res => {
                console.log(res.data.data.money);
                this.setState({
                    data:res.data.data.money,
                    loading: false
                })
            });
    }
    render() {
        return (
            <div className="aNews">
                <Breadcrumb name="新闻数据" />
                <div className="Content">
                    <Spin spinning={this.state.loading} tip="Loading...">
                        {
                            this.state.data.map((item, key) => (
                                <Card
                                    hoverable
                                    key={key}
                                    className="aNewsItem"
                                    cover={<img alt={item.source} src={item.picInfo[0].url} style={{ height: 280 }} />}
                                >
                                    <Meta
                                        title={item.digest}
                                        description={item.ptime}
                                    />
                                </Card>
                            ))
                        }

                    </Spin>
                </div>
            </div>
        );
    }
}

export default News