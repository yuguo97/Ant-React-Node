/*
 * @Author: your name
 * @Date: 2020-09-19 08:41:46
 * @LastEditTime: 2020-09-20 20:50:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /github/Ant-React-Node/src/components/Aside.js
 */



import React from 'react'
// import routes from './../router';
import history from '../history';
import {  NavLink ,withRouter} from "react-router-dom";
import { Menu , Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class Aside extends React.Component{
    rootSubmenuKeys = ['sub1', 'sub2'];

    state = {
      openKeys: ['sub1'],
    };
    onOpenChange = (openKeys) => {
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({ openKeys });
      } else {
        this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : [],
        });
      }
    }
    render() {
        return <div className="aSide">
                <Menu mode="inline" openKeys={this.state.openKeys} onOpenChange={this.onOpenChange} defaultSelectedKeys={["/Home/HomeIndex"]} selectedKeys={[history.location.pathname]} style={{ width: "250px", height: "100%" }} defaultOpenKeys={this.state.openKeys}>
                    < Menu.Item key = "/Home/HomeIndex" >
                        < NavLink to = "/Home/HomeIndex" >
                                < Icon type = "mail" />
                                系统首页
                        </NavLink>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span>
                                <Icon type="setting" />
                                <span>数据分析</span>
                            </span>}>
                        <Menu.Item key="/Home/Topics">
                            <NavLink to="/Home/Topics">
                                时间轴数据
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="/Home/Weather">
                            <NavLink to="/Home/Weather">
                                天气数据
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key = "/Home/About" >
                            <NavLink to = "/Home/About" > 图表数据 </NavLink>
                        </Menu.Item>
                        <SubMenu key = "sub3" title = "表格设置" >
                            <Menu.Item key = "/Home/Tab" >
                                <NavLink to = "/Home/Tab" >
                                表格数据 </NavLink>
                                </Menu.Item>
                                <Menu.Item key = "/Home/News">
                                <NavLink to = "/Home/News">
                                新闻数据
                                </NavLink>
                            </Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span>
                                <Icon type="appstore" />
                                <span>系统设置</span>
                            </span>}>
                        <Menu.Item key="/Home/Setting">
                            <NavLink to="/Home/Setting">
                                个人设置
                            </NavLink>
                        </Menu.Item>

                    </SubMenu>
                </Menu>
            </div>;
    }
}

export default withRouter(Aside);