import React from 'react'
import routes from './../router';
import history from '../history';
import {  NavLink ,withRouter} from "react-router-dom";
import { Menu , Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class Aside extends React.Component{
    render() {
        return (
            <div className="aSide">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['/']}
                    selectedKeys={[history.location.pathname]}
                    style={{ width:"250px",height:"100%"}}
                    defaultOpenKeys={['sub1']}
                >
                    <SubMenu key="sub1" title={<span><Icon type="setting" /><span>数据设置</span></span>}>
                        {routes.map((route) => (
                            <Menu.Item
                                key={route.path}
                            >
                                <NavLink to={route.path}>{route.name}</NavLink>
                            </Menu.Item>
                        ))}
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default withRouter(Aside);