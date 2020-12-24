import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { notifyError, notifySuccess } from "../partials";
import { Form, Input, Button } from "antd";

export default function LoginForm() {
  toast.configure();

  const [form] = Form.useForm();

  const [auth, setAuth] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setAuth({
      ...auth,
      [name]: value,
    });

    console.log("NAME: ", name);
    console.log(target);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // get credentials first
    axios({
      method: "GET",
      url: "/adminCredentials",
    })
      .then((result) => {
        return result.data[0], console.log("AUTH: ", result.data[0]);
      })
      .catch((err) => console.log(err));
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
              value={auth.username}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.TextArea
              name="password"
              value={auth.password}
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
