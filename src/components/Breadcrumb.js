/*
 * @Author: 隗果 
 * @Date: 2020-09-03 22:33:51 
 * @Last Modified by:   隗果 
 * @Last Modified time: 2020-09-03 22:33:51 
 */
import React from "react";
import { Breadcrumb, Icon } from "antd";

class aBreadcrumb extends React.Component {
    render() {
        return (
          <div className="aBreadcrumb">
            <Breadcrumb>
                    <Breadcrumb.Item href="" style={{ height: "50px", "lineHeight":"50px" }}>
                    <Icon type="home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                    <Icon type="user" />
                    <span>{this.props.username}</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{this.props.name}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        );
    }
};

export default aBreadcrumb;