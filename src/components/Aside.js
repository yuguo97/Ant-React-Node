import React from 'react'
// import routes from './../router';
import history from '../history';
import {  NavLink ,withRouter} from "react-router-dom";
import { Menu , Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class Aside extends React.Component{
    render() {
        return <div className="aSide">
            <Menu mode="inline" defaultSelectedKeys={["/Home/HomeIndex"]} selectedKeys={[history.location.pathname]} style={{ width: "250px", height: "100%" }} defaultOpenKeys={["sub1"]}>
              <SubMenu key="sub1" title={<span>
                    <Icon type="setting" />
                    <span>数据设置</span>
                  </span>}>
                <Menu.Item key="/Home/HomeIndex">
                  <NavLink to="/Home/HomeIndex">首页数据</NavLink>
                </Menu.Item>
                <Menu.Item key="/Home/Topics">
                  <NavLink to="/Home/Topics">时间轴数据</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span>
                    <Icon type="appstore" />
                    <span>系统设置</span>
                  </span>}>
                <Menu.Item key="/Home/About">
                  <NavLink to="/Home/About">图表数据</NavLink>
                </Menu.Item>
                <SubMenu key="sub3" title="表格设置">
                  <Menu.Item key="/Home/Tab">
                    <NavLink to="/Home/Tab">表格数据</NavLink>
                  </Menu.Item>
                  <Menu.Item key="/Home/News">
                    <NavLink to="/Home/News">新闻数据</NavLink>
                  </Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
          </div>;
    }
}

export default withRouter(Aside);