import React, { useState } from "react";
import useFaqData from "../hooks/useFaqData";
import { setRecordIds } from "../helpers";
import { Button } from "antd";

export default function FaqsAdmin({ recordsArr, setRecordsArr }) {
  const { state } = useFaqData();

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
                onClick={() => setRecordIds(faq.id, recordsArr, setRecordsArr)}
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
