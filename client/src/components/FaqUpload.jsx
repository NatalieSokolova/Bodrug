import React from "react";
import { Form, Input, Button } from "antd";

export default function FaqUpload() {
  return (
    <div>
      <h1>Add a new FAQ below</h1>
      <Form
        className="upload-form"
        name="basic"
        initialValues={{ remember: true }}
      >
        <div
          style={{
            padding: "5vh 2vw",
            marginBottom: "-7.5vh",
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
          style={{
            marginBottom: "0",
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{
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
