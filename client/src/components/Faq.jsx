import React, { useState, useEffect } from "react";
import useFaqData from "../hooks/useFaqData";
// import "./Faq.css";

export default function Faq({}) {
  const { state, setState } = useFaqData();
  let url;

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
    <span>
      <h1>THESE ARE FAQs:</h1>
      <div>{faqList}</div>
    </span>
  );
}
