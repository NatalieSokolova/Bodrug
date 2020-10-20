import React from "react";
import emailjs from "emailjs-com";

export default function Message() {
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
