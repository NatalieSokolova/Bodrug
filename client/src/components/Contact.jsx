import React from "react";
import Message from "./Message";
import "./Contact.css";

export default function Contact({}) {
  return (
    <div class="contact-content">
      <div className="contacts">
        <h1>Don't hesitate to reach out!</h1>
        <div>
          <Message className="email-form" />
        </div>
        <h1>phone??</h1>
        <h1>social media?</h1>
        <h1>something else</h1>
      </div>
      <div className="contact-photo">
        <img
          src={require("../assets/about/IMG_1710.jpeg")}
          alt="Yulia Bodrug"
        />
      </div>
    </div>
  );
}
