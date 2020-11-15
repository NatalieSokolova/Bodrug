import React from "react";
import useFaqData from "../hooks/useFaqData";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./Faq.css";

export default function Faq() {
  toast.configure();
  const { state } = useFaqData();

  return (
    <div className="container">
      <h1>Don't See Your Question Below?</h1>
      <h2>
        <a href="/contact">please, reach out!</a>
      </h2>
      <div className="content">
        <img
          src={require("../assets/IMG_1705.jpg")}
          alt="by Iuliia Bodrug"
          className="faq-photo"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
        />
        <div className="faqContainer">
          {state.faqs.map((faq) => (
            <div key={faq.id} className="qa">
              <h1 className="question">{faq.question}</h1>
              <p className="answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
