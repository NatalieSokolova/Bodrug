import React from "react";
import Message from "./Message";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

export default function Contact({}) {
  const notify = () => toast("Wow so easy !");
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
            // alert("Sorry, all the images are copyright");
            notify();
            e.preventDefault();
          }}
        />
        <img
          src={require("../assets/paintings/tamara-menzi-n-vnWQmmVoY-unsplash.jpg")}
          alt="Yulia Bodrug"
          id="top"
          onContextMenu={(e) => {
            // alert("Sorry, all the images are copyright");
            toast("Wow so easy !");

            e.preventDefault();
          }}
        />
      </div>
    </div>
  );
}
