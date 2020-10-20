import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, Button } from "antd";

export default function Message() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: "This field is required!",
    types: {
      email: "Sorry, this is not a validate email!",
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  // this stays
  const sendEmail = (e) => {
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
  };

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
  );
}
