import React from "react";
import { useAlert } from "react-alert";
import { positions, transitions, types } from "react-alert";
import emailjs from "emailjs-com";

export default function Message() {
  const alert = useAlert();

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
          alert.show("Thank you! We'll get in touch with you shortly", {
            type: "success",
          });
        },
        (error) => {
          console.log(error.text);
          alert.show("Sorry, your email was not sent. Please try again", {
            type: "error",
          });
        }
      );
  };

  return (
    <form onSubmit={sendEmail}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter Your Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter Your Email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          className="form-control"
          placeholder="Enter Your Message"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
