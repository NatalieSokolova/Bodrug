import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { notifyError, notifySuccess } from "../partials";

import "react-toastify/dist/ReactToastify.css";
import "./Message.css";

function Message(props) {
  toast.configure();

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    errors: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues({
      ...values,
      [name]: value,
    });

    console.log("NAME: ", name);
    console.log(target);
  };

  const validateMail = () => {
    let formIsValid = true;

    if (!values.name || values.name.length < 1) {
      values.errors.name = "Please, enter your name";
      formIsValid = false;
    }

    setValues({
      ...values,
      errors: values.errors,
    });

    let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!pattern.test(values.email)) {
      values.errors.email = "Please, enter a valid email";
      formIsValid = false;
    }

    setValues({
      ...values,
      errors: values.errors,
    });

    if (!values.message || values.message.length < 1) {
      values.errors.message = "Please, enter your message";
      formIsValid = false;
    }

    setValues({
      ...values,
      errors: values.errors,
    });
    console.log("ERRORS?", values.errors);
    return formIsValid;
  };

  const resetForm = () => {
    setValues({
      name: "",
      email: "",
      message: "",
      errors: {
        name: "",
        email: "",
        message: "",
      },
    });
  };

  const sendEmail = (event) => {
    event.preventDefault();
    console.log("submitting");

    if (!validateMail()) {
      return;
    }

    const templateParams = {
      name: `${values.name} (${values.email})`,
      email: values.email,
      message: values.message,
    };

    emailjs
      .send(
        "service_mwelobp",
        "template_oyae051",
        templateParams,
        "user_mOdU1UDxNSuDbnFQZ9Qh6"
      )
      .then(
        (result) => {
          notifySuccess(
            "Your message was sent successfully! We'll get back to you soon"
          );
          console.log("YAY!", result.status, result.text);
        },
        (error) => {
          notifyError("Sorry, your email was not sent. Please, try again");
          console.log("TROUBLE! ", error);
        }
      );

    resetForm();

    console.log("VALUES: ", values);
  };

  return (
    <div className="form-container">
      <h1>
        Drop me a line on
        <a
          href="https://www.instagram.com/bodrug_photo/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i> instagram </i>
        </a>
        or fill out the form below and I'll get in touch with you soon
      </h1>
      <form
        id={props.id}
        className={props.className}
        name={props.name}
        method={props.method}
        action={props.action}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            required="required"
            onChange={handleInputChange}
            value={values.name}
            placeholder="Enter Your Name"
          />
          {values.errors.name && (
            <span id="error">Please, enter your name</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            required
            onChange={handleInputChange}
            value={values.email}
            placeholder="Enter Your Email"
          />
          {values.errors.email && (
            <span id="error">Please, enter a valid email</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            name="message"
            className="form-control"
            required="required"
            onChange={handleInputChange}
            value={values.message}
            placeholder="Enter Your Message"
          />
          {values.errors.message && (
            <span id="error">Sorry, you cannot submit an empty message</span>
          )}
        </div>
        <button
          onClick={sendEmail}
          type="submit"
          name="submit"
          className="btn btn-primary"
          required="required"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Message;
