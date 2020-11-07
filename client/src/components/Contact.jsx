import React from "react";
import Message from "./Message";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./Contact.css";

export default function Contact() {
  toast.configure();

  return (
    <div className="contact-content">
      <div className="contacts">
        <h1>Don't hesitate to reach out!</h1>
        <div>
          <Message className="email-form" />
        </div>
      </div>
      <div className="contact-photo">
        <img
          src={require("../assets/about/IMG_1710.jpeg")}
          alt="Yulia Bodrug"
          id="bottom"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
        />
        <img
          src={require("../assets/paintings/tamara-menzi-n-vnWQmmVoY-unsplash.jpg")}
          alt="Yulia Bodrug"
          id="top"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
        />
      </div>
    </div>
  );
}
