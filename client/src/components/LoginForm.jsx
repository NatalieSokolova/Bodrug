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
    <div>
      <h1>Add a new FAQ below</h1>
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
            onClick={handleSubmit}
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
