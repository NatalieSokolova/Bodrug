import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";

export default function FaqUpload() {
  const [faq, setFaq] = useState({
    question: "Q",
    answer: "A",
  });

  console.log("STATE: ", faq);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setFaq({
      ...faq,
      [name]: value,
    });

    console.log("NAME: ", name);
    console.log(target);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFaq = {
      question: faq.question,
      answer: faq.answer,
    };

    axios
      .post("http://localhost:3001/faqs", newFaq)
      .then((response) => {
        setFaq({});
      })
      .catch((error) => error);
  };

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
            <Input.TextArea
              name="question"
              value={faq.question}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            label="FaqAnswer"
            name="FaqAnswer"
            rules={[{ required: true, message: "Please input your answer!" }]}
          >
            <Input.TextArea
              value={faq.answer}
              name="answer"
              onChange={handleChange}
            />
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
