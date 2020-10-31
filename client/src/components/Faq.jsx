import React from "react";
import useFaqData from "../hooks/useFaqData";
import "./Faq.css";

export default function Faq({}) {
  const { state, setState } = useFaqData();

  return (
    <div className="container">
      <h1>Don't See Your Question Below?</h1>
      <h2>
        <a href="/contact">please, reach out!</a>
      </h2>
      <img
        src={require("../assets/IMG_1705.jpg")}
        className="faq-photo"
        onContextMenu={(e) => {
          alert("Sorry, all the images are copyright");
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
  );
}
