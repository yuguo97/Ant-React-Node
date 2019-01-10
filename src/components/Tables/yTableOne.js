/* eslint-disable */
import React from 'react'
import axios from 'axios';
import { Table, Divider, Pagination, Modal, message, Form, Input } from "antd";

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

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return <Modal visible={visible} title="修改数据" okText="确定" cancelText="取消" onCancel={onCancel} onOk={onCreate}>
          <Form layout="horizontal">
            <Form.Item label="name" {...formItemLayout}>
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "请输入name!"
                  }
                ]
              })(<Input placeholder="name" />)}
            </Form.Item>
            <Form.Item label="url" {...formItemLayout}>
              {getFieldDecorator("url", {
                rules: [
                  {
                    required: true,
                    message: "请输入url"
                  }
                ]
              })(<Input placeholder="url" />)}
            </Form.Item>
            <Form.Item label="alexa" {...formItemLayout}>
              {getFieldDecorator("alexa", {
                rules: [
                  {
                    required: true,
                    message: "请输入alexa"
                  }
                ]
              })(<Input placeholder="alexa" />)}
            </Form.Item>
            <Form.Item label="country" {...formItemLayout}>
              {getFieldDecorator("country", {
                rules: [
                  {
                    required: true,
                    message: "请输入country!"
                  }
                ]
              })(<Input placeholder="country" />)}
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
        loading: false, 
        ModifyID:null
    };
  }
    handleModify = (record, e) => {
        e.preventDefault();
        console.log(record.id);
        this.setState({ 
            visible: true, 
            ModifyID: record.id 
        });
        const form = this.formRef.props.form;
        form.setFieldsValue({
            name: record.name,
            url: record.url,
            alexa: record.alexa,
            country: record.country
        });
    };
  handleDelete = (record, e) => {
    e.preventDefault();
    // console.log(record)
    const _this = this;
    Modal.confirm({
        title: "删除",
        content: "确认删除?",
        okText: "确认",
        cancelText: "取消",
        okType: 'danger',
        onOk: function () {
            axios
                .delete(
                    `http://localhost:6551/api/Websites/delWebsites/${record.id}`
                )
                .then(res => {
                    if(res.data.code==200){
                        message.success("删除成功", 1, function () {
                            // console.log(res)
                            _this.getData();
                        })  
                    }else{
                        message.error("删除失败");  
                    }
                });
        }
    });
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
        const _this = this;
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            console.log("Received values of form: ", values);
            axios
              .put(
                `http://localhost:6551/api/Websites/modWebsites/${this.state.ModifyID}`,values
              )
              .then(res => {
                  if (res.data.code == 200) {
                      message.success("修改成功", 1, function () {
                        //   console.log(res)
                          _this.getData();
                      })
                  } else {
                      message.error("修改失败");
                  }

              });
            this.setState({ visible: false });
            form.resetFields();
        });
    };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  getData=()=>{
      this.setState({
          loading: true
      });
      axios.get(`http://localhost:6551/api/Websites`).then(res => {
        //   console.log(res.data.result);
          this.setState({
              data: res.data.result,
              loading: false,
              total: res.data.result.length,
              hasData: true
          });
      });
  }
  componentDidMount() {
      this.getData();
  }

  render() {
    const columns = [
      {
        title: "name",
        dataIndex: "name",
        key: "name",
        render: text => <a href="javascript:;">{text}</a>
      },
      {
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
      },
      {
        title: "Action",
        key: "action",
        render: record => (
          <span>
            <a
              href="javascript:;"
              onClick={this.handleModify.bind(this, record)}
            >
              修改
            </a>
            <Divider type="vertical" />
                <a href="javascript:;" onClick={this.handleDelete.bind(this, record)}>
              删除
            </a>
          </span>
        )
      }
    ];
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