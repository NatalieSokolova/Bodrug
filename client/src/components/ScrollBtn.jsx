import React, { useState, useEffect } from "react";
import "./ScrollBtn.css";

export default function ScrollBtn() {
  const [show, setShow] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setShow(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", () => toggleVisibility());
  }, []);

  return <div>{show ? <button id="scroll-btn">scroll</button> : null}</div>;
}
