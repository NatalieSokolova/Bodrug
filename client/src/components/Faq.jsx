import React from "react";
import useFaqData from "../hooks/useFaqData";
import "./Faq.css";

export default function Faq({}) {
  const { state, setState } = useFaqData();

  return (
    <div className="container">
      <img src={require("../assets/IMG_1705.jpg")} className="photo" />
      <div className="faqContainer">
        {state.faqs.map((faq) => (
          <div key={faq.id} className="qa">
            <h1 className="question">{faq.question}</h1>
            <br />
            <p className="answer">{faq.answer}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
