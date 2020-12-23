import React from "react";
import { Form, Input, Button } from "antd";

export default function FaqUpload() {
  return (
    <div>
      <div>NEW FAQ INCOMING!!!</div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        className="faq-upload-form"
      >
        <Form.Item
          label="FaqQuestion"
          name="FaqQuestion"
          rules={[{ required: true, message: "Please input your question!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="FaqAnswer"
          name="FaqAnswer"
          rules={[{ required: true, message: "Please input your answer!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
