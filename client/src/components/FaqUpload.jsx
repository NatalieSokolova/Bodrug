import React from "react";
import { Form, Input, Button } from "antd";

export default function FaqUpload() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { span: 16 },
  };

  return (
    <div>
      <div>NEW FAQ INCOMING!!!</div>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        style={{
          width: "auto",
        }}
      >
        <div
          style={{
            margin: "5vw",
            marginLeft: "-5vw",
            width: "68vw",
          }}
        >
          <Form.Item
            label="FaqQuestion"
            name="FaqQuestion"
            rules={[{ required: true, message: "Please input your question!" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="FaqAnswer"
            name="FaqAnswer"
            rules={[{ required: true, message: "Please input your answer!" }]}
          >
            <Input.TextArea />
          </Form.Item>
        </div>

        <Form.Item
          {...tailLayout}
          style={{
            marginBottom: "0",
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "68vw",
              margin: ".75vw",
              paddingBottom: "20px",
              height: "50px",
            }}
          >
            Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
