import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { notifyError, notifySuccess } from "../partials";
import { Form, Input, Button } from "antd";

export default function LoginForm() {
  toast.configure();

  const [form] = Form.useForm();

  const [faq, setFaq] = useState({
    question: "",
    answer: "",
  });

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

    console.log("NEW: ", newFaq);
    if (newFaq.question && newFaq.answer) {
      axios
        .post("http://localhost:3001/faqs", newFaq)
        .then((response) => {
          setFaq({});
          form.resetFields();
          notifySuccess("Woo-hoo! FAQ posted successfully!");
        })
        .catch((error) => {
          notifyError("OOPS! Something went wrong. Please, try again");
          console.log("TROUBLE! ", error);
        });
    } else {
      notifyError("You can't submit an empty FAQ. Please, try again");
    }
  };

  return (
    <div className="upload-container">
      <h1>Please, login first to acces the admin pannel</h1>
      <Form
        form={form}
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
            label="username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input.TextArea
              name="username"
              value={faq.question}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.TextArea
              value={faq.answer}
              name="password"
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
            onClick={handleSubmit}
            type="primary"
            htmlType="submit"
            style={{
              paddingBottom: "20px",
              height: "50px",
            }}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
