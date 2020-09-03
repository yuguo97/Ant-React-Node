/*
 * @Author: 隗果 
 * @Date: 2020-09-03 22:34:09 
 * @Last Modified by:   隗果 
 * @Last Modified time: 2020-09-03 22:34:09 
 */

import React from 'react';


//引入highcharts
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';
import Highmaps from 'highcharts/modules/map';
import axios from "axios/index";

HighchartsMore(Highcharts);
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
Highmaps(Highcharts);

function getHPie(data) {
    Highcharts.chart('pie', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: '2018 年浏览器市场份额'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: data
        }]
    });
}


class ygPie extends React.Component {
    componentDidMount() {
        axios.get(`/api`)
            .then(res => {
                getHPie(res.data.setting);
            });
    }
    render() {
        return (
               <div id='pie'></div>
        )
    }
}
export default ygPie;