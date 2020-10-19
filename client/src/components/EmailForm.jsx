import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, InputNumber, Button } from "antd";
import "./EmailForm.css";

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

// const EmailForm = () => {

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    const onFinish = (values) => {
      console.log(values);
    };

    return (
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="emailForm"
        onSubmit={this.handleSubmit.bind(this)}
        method="POST"
      >
        <Form.Item
          name={["name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
          value={this.state.name}
          onChange={this.onNameChange.bind(this)}
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
          value={this.state.email}
          onChange={this.onEmailChange.bind(this)}
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
          value={this.state.message}
          onChange={this.onMessageChange.bind(this)}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default EmailForm;
