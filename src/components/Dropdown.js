/* eslint-disable */
import React from 'react'
import {withRouter} from "react-router-dom";
import { Menu, Dropdown, Icon, message} from 'antd';
import history from '../history';
const onClick = function ({ key }) {
    if(key==="0"){
        message.success("我的消息");
        history.push('/Home/Setting');
    }else if(key==="1"){
        message.error("设置");
        history.push("/Home/News");
    }else if(key==="3"){
        message.warning("退出登录");
        history.push('/');
    }
};

const menu = (
    <Menu onClick={onClick}>
        <Menu.Item key="0">
            我的消息
        </Menu.Item>
        <Menu.Item key="1">
            设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">退出登陆</Menu.Item>
    </Menu>
);
class Drop extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        return <div className="aDropdown">
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="" style={{ color: "#fff", fontSize: "18px", lineHeight: 1 }}>
                {this.props.name} <Icon type="global" theme="outlined" twoToneColor="#52c41a" style={{ fontSize: "18px" }} />
              </a>
            </Dropdown>
          </div>;
    }
}

export default withRouter(Drop)