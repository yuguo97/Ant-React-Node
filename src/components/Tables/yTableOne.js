/* eslint-disable */
import React from 'react'
import axios from 'axios';
import { Table, Divider, Pagination, Modal, Button, Form, Input, Radio,} from 'antd';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const {
                visible, onCancel, onCreate, form,
            } = this.props;
            const { getFieldDecorator } = form;
            return <Modal visible={visible} title="修改数据" okText="确定" cancelText="取消" onCancel={onCancel} onOk={onCreate}>
                <Form layout="horizontal">
                    <Form.Item label="name" {...formItemLayout}>
                    {getFieldDecorator("name", {
                      rules: [
                        {
                          required: true,
                          message:
                            "请输入name!"
                        }
                      ]
                    })(<Input />)}
                    </Form.Item>
                    <Form.Item label="url" {...formItemLayout}>
                    {getFieldDecorator("url", {
                        rules: [
                        {
                            required: true,
                            message:
                            "请输入url"
                        }
                        ]
                    })(<Input />)}
                    </Form.Item>
                    <Form.Item label="alexa" {...formItemLayout}>
                    {getFieldDecorator("alexa", {
                        rules: [
                        {
                            required: true,
                            message:
                            "请输入alexa"
                        }
                        ]
                    })(<Input />)}
                    </Form.Item>
                    <Form.Item label="country" {...formItemLayout}>
                    {getFieldDecorator("country", {
                        rules: [
                        {
                            required: true,
                            message:
                            "请输入country!"
                        }
                        ]
                    })(<Input />)}
                    </Form.Item>
                </Form>
              </Modal>;
        }
    }
);


class yTableOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      current: 1,
      total: 0,
      hasData: false,
      visible: false,
      loading: false
    };
  }
    handleModify = (name, e) => {
        e.preventDefault();
        console.log(name);
        this.setState({ visible: true });
   };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleOk = e => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    axios.get(`http://localhost:6551/api/Websites`).then(res => {
      console.log(res.data.result);
      this.setState({
        data: res.data.result,
        loading: false,
        total: res.data.result.length,
        hasData: true
      });
    });
  }

  render() {
    const columns = [
        { 
            title: "name", 
            dataIndex: "name", 
            key: "name", 
            render: text => <a href="javascript:;">{text}</a> 
        }, { 
            title: "url", 
            dataIndex: "url", 
            key: "url" 
            }, 
        { 
            title: "alexa", 
            dataIndex: "alexa", 
            key: "alexa" 
            },
         { 
            title: "country", 
            dataIndex: "country", 
            key: "country" 
            }, { 
            title: "Action", 
            key: "action", 
            render: record => <span>
              <a href="javascript:;" onClick={this.handleModify.bind(this, record)}>
              修改
            </a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={this.handleDelete}>
              删除
            </a>
          </span> }];
    return (
      <div className="aTableone">
        <Table
          columns={columns}
          dataSource={this.state.hasData ? this.state.data : null}
          loading={this.state.loading}
          pagination={false}
          rowKey="id"
        />
        <Pagination
          defaultCurrent={this.state.current}
          total={this.state.total}
          showTotal={total => `总数据 ${total} 条`}
        />
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default yTableOne;