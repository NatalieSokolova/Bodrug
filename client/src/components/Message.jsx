import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, InputNumber, Button } from "antd";

export default function Message() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  // const validateMessages = {
  //   required: "${label} is required!",
  //   types: {
  //     email: "${label} is not validate email!",
  //     number: "${label} is not a validate number!",
  //   },
  //   number: {
  //     range: "${label} must be between ${min} and ${max}",
  //   },
  // };

  // const onFinish = (values) => {
  //   console.log(values);
  // };

  // this stays
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mwelobp",
        "template_oyae051",
        e.target,
        "user_mOdU1UDxNSuDbnFQZ9Qh6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

    // <Form
    //   {...layout}
    //   name="nest-messages"
    //   onFinish={onFinish}
    //   validateMessages={validateMessages}
    //   onSubmit={sendEmail}
    // >
    //   <Form.Item name={"name"} label="Name" rules={[{ required: true }]}>
    //     <Input />
    //   </Form.Item>
    //   <Form.Item
    //     name={"email"}
    //     label="Email"
    //     rules={[{ type: "email", required: true }]}
    //   >
    //     <Input />
    //   </Form.Item>
    //   <Form.Item
    //     name={"message"}
    //     label="message"
    //     rules={[{ required: true }]}
    //     type="submit"
    //     value="Send"
    //   >
    //     <Input.TextArea />
    //   </Form.Item>
    //   <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
    //     <Button type="submit" htmlType="submit">
    //       Submit
    //     </Button>
    //   </Form.Item>
    // </Form>
  );
}
