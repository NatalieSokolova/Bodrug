import React from "react";
import useFaqData from "../hooks/useFaqData";
import "./Faq.css";

export default function Faq({}) {
  const { state, setState } = useFaqData();

  const faqList = state.faqs.map((faq) => (
    <div key={faq.id} className="faqContainer">
      <div>
        <b>{faq.question}</b>
      </div>
      <br />
      <div>{faq.answer}</div>
      <br />
    </div>
  ));

  return (
    <div>
      <span>
        <img src={require("../assets/IMG_1705.jpg")} />
      </span>
      <span>
        <div>{faqList}</div>
      </span>
    </div>
  );
}
