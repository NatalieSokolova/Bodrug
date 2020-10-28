import React from "react";
import useFaqData from "../hooks/useFaqData";
import "./Faq.css";

export default function Faq({}) {
  const { state, setState } = useFaqData();

  // const faqList = state.faqs.map((faq) => (
  //   <div key={faq.id} className="faqContainer">
  //     <div>
  //       <b>{faq.question}</b>
  //     </div>
  //     <br />
  //     <div>{faq.answer}</div>
  //     <br />
  //   </div>
  // ));

  return (
    <div>
      <span>
        <img src={require("../assets/IMG_1705.jpg")} className="photo" />
      </span>
      <span>
        <div>
          {state.faqs.map((faq) => (
            <div key={faq.id} className="faqContainer">
              <div>
                <h1 className="question">{faq.question}</h1>
              </div>
              <br />
              <p className="answer">{faq.answer}</p>
              <br />
            </div>
          ))}
        </div>
      </span>
    </div>
  );
}
