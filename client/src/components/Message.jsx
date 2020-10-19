import React, { Component, useState, useEffect } from "react";
import useMessageData from "../hooks/useMessageData";
import { Form, Input, Button } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

class Message extends Component {
  // const { state, setState } = useMessageData();

  state = {
    name: "",
    email: "",
    message: "",
    sent: false,
    buttonText: "Send Message",
  };

  render() {
    const onFinish = (values) => {
      console.log(values);
    };

    console.log("THIS: ", this);

    return (
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        onSubmit={(e) => this.formSubmit(e)}
      >
        <Form.Item
          name={["name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
          onChange={(e) => this.setState({ name: e.target.value })}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["email"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
          onChange={(e) => this.setState({ email: e.target.value })}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["message"]}
          label="Message"
          rules={[
            {
              required: true,
            },
          ]}
          onChange={(e) => this.setState({ message: e.target.value })}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            {this.state.buttonText}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Message;
