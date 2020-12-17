import React from "react";
import Message from "./Message";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./Contact.css";

export default function Contact() {
  toast.configure();

  return (
    <div className="contact-content">
      <div>
        <Message className="email-form" />
      </div>
      <div className="contact-photo">
        <img
          src={require("../assets/about/IMG_1710-min.jpg")}
          alt="Yulia Bodrug"
          id="bottom"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
        />
      </div>
    </div>
  );
}
