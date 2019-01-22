/* eslint-disable */
import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message} from "antd";
import history from "./history";
import axios from "axios";
class LoginFrom extends React.Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        var loginParams = {
            USERNAME: values.username,
            PASSWORD: values.password
        };
        axios
        .post(`http://localhost:5551/api/LoginUser/Login`,loginParams)
        .then(res => {
            console.log(res)
            if (res.data.isLogin){
                message.success("登录成功",1,function(){
                    history.push("/Home/HomeIndex");
                })
            }else{
                message.error("账号或密码错误！")
            }
        });

      }
    });
  };
    componentDidMount(){
        this.props.form.setFieldsValue({
            username: "admin",
            password:"123456"
        });
    }
  render() {
    const { getFieldDecorator } = this.props.form;
    return <div className="login">
        <div className="login-log">
          <div className="login-logo">YG后台管理系统</div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(<Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="Password" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>记住账号</Checkbox>)}
              <a className="login-form-forgot" href="">
                忘记密码
              </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              <a href="">现在注册!</a>
            </Form.Item>
          </Form>
        </div>
      </div>;
  }
}
let LoginForm = Form.create()(LoginFrom);
export default LoginForm;
