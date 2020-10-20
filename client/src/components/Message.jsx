import React from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./Message.css";

export default function Message() {
  const { register, handleSubmit, errors } = useForm();
  const alert = useAlert();

  const sendEmail = (e) => {
    // e.preventDefault();

    var templateParams = {
      name: "Natalie",
      notes: "Check this out!",
    };

    emailjs
      .send(
        "service_mwelobp",
        "template_oyae051",
        templateParams,
        "user_mOdU1UDxNSuDbnFQZ9Qh6"
      )
      .then((result) => {
        console.log(result.text);
        alert.show("Thank you! We'll get in touch with you shortly", {
          type: "success",
        });
      })
      .catch((e) => {
        console.log("TROUBLE: ", e.text);
        alert.show("Sorry, your email was not sent. Please try again", {
          type: "error",
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(sendEmail)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter Your Name"
          ref={register({ required: true })}
          // errors will return when field validation fails
        />
        {errors.name && <span id="error">Please, input your name</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter Your Name"
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please, Enter A Valid Email Address",
            },
          })}
        />
        {errors.email && (
          <span id="error">Please, Enter A Valid Email Address</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          className="form-control"
          placeholder="Enter Your Message"
          ref={register({ required: true })}
          // errors will return when field validation fails
        />
        {errors.message && (
          <span id="error">Sorry, you can't submil an empty message</span>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
