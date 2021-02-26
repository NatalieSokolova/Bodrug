import React, { useState } from "react";
import useFaqData from "../hooks/useFaqData";
import { setRecordIds } from "../helpers";
import { Button } from "antd";

export default function FaqsAdmin() {
  const { state } = useFaqData();
  const [faqsArr, setFaqsArr] = useState([]);

  return (
    <table>
      <thead></thead>
      <tbody>
        {state.faqs.map((faq) => (
          <tr key={faq.id}>
            <td
              style={{
                fontSize: "1.25em",
                fontFamily: "Playfair Display",
                wordWrap: "break-word",
              }}
            >
              {faq.question}
            </td>
            <td
              style={{
                textAlign: "center",
              }}
            >
              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                }}
                onClick={() => setRecordIds(faq.id, faqsArr, setFaqsArr)}
              >
                select
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
