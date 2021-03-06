import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { notifyError } from "../partials";
import { Form, Input, Button } from "antd";

export default function LoginForm({ auth, setAuth }) {
  toast.configure();

  const ADMIN_USERNAME = process.env.REACT_APP_ADMIN_USERNAME;
  const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD;

  let history = useHistory();

  function handleRedirect() {
    history.push("/admin");
  }

  const [form] = Form.useForm();

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setAuth({
      ...auth,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("AUTH U: ", auth.username);
    console.log("AUTH P: ", auth.password);
    console.log("ENV N: ", ADMIN_USERNAME);
    console.log("ENV PW: ", ADMIN_PASSWORD);

    if (auth.username === ADMIN_USERNAME && auth.password === ADMIN_PASSWORD) {
      console.log("SUCCESS??");
      return handleRedirect();
    }

    return (
      form.resetFields(),
      setAuth({}),
      notifyError("OOPS! Wrong username or password. Please, try again")
    );
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
            <Input
              name="username"
              type="text"
              value={auth.username}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              name="password"
              type="password"
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
