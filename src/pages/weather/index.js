import React from 'react'


import Breadcrumb from "./../../components/Breadcrumb";
import axios from "axios/index";

import './index.css';

import { Select } from "antd";

const Option = Select.Option;


const provinceData = ['湖北', '湖南'];
const cityData = {
    湖北: ['武汉', '襄阳', '宜昌'],
    湖南: ['长沙', '岳阳', '张家界'],
};


class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: cityData[provinceData[0]],
            secondCity: cityData[provinceData[0]][0],
        };
    }

    getData = (theCityCodeID) =>{
        const pra = { theCityCode: theCityCodeID };
        axios
            .post(`http://localhost:8551/wsdl/Weather/getWeather`, pra)
            .then(res => {
                console.log(res.data);
            });
    }
    handleProvinceChange = (value) => {
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0],
        });
    }

    onSecondCityChange = (value) => {
        this.setState({
            secondCity: value,
        });
        this.getData(value);
    }
    componentDidMount() {
        console.log(this.state.secondCity);
        this.getData(this.state.secondCity);
    }
    render() {
        const { cities } = this.state;
        return <div className="aWeather">
                <Breadcrumb name="天气设置" username="数据设置" />
                <div className="Content">
                    <Select
                        defaultValue={provinceData[0]}
                        style={{ width: 120 }}
                        onChange={this.handleProvinceChange}
                    >
                        {provinceData.map(province => <Option key={province}>{province}</Option>)}
                    </Select>
                    <Select
                        style={{ width: 120 }}
                        value={this.state.secondCity}
                        onChange={this.onSecondCityChange}
                    >
                        {cities.map(city => <Option key={city}>{city}</Option>)}
                    </Select>
                </div>
            </div>;
    }
}

export default Weather