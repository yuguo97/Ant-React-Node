 /* eslint-disable */
import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from "antd";
import history from "./history";

class LoginFrom extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    // let history = this.props.history;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        history.push("/Home/HomeIndex");
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className='login'>
            <div className='login-log'>
                <div className='login-logo'>
                    后台管理系统
                </div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                    {getFieldDecorator("userName", {
                        rules: [{ required: true, message: "Please input your username!" }]
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                        placeholder="Username"
                        />
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator("password", {
                        rules: [{ required: true, message: "Please input your Password!" }]
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                        type="password"
                        placeholder="Password"
                        />
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator("remember", {
                        valuePropName: "checked",
                        initialValue: true
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </div>
      </div>
    );
  }
}
let LoginForm = Form.create()(LoginFrom);
export default LoginForm;
