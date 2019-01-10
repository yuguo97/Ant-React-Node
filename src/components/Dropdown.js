/* eslint-disable */
import React from 'react'
import {withRouter} from "react-router-dom";
import { Menu, Dropdown, Icon, Modal} from 'antd';
import history from '../history';
const onClick = function ({ key }) {
    if(key==="0"){
  
    }else if(key==="1"){
        
    }else if(key==="3"){
        Modal.confirm({
            title: "退出系统",
            content: "确认退出系统?",
            okText: "确认",
            cancelText: "取消",
            okType: 'danger',
            onOk:function(){
                history.push('/');
            }
        });

    }
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="0">
      <a href="http://yuguo1991.com/about/" target="_blank">
        关于作者
      </a>
    </Menu.Item>
    <Menu.Item key="1">
        <a href="https://github.com/kuiguo1991/ReactTraining" target="_blank">项目仓库</a>
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