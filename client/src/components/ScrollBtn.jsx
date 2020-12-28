import React, { useState, useEffect } from "react";
import "./ScrollBtn.css";

export default function ScrollBtn() {
  const [show, setShow] = useState(false);
  // const [position, setPosition] = useState("window.innerHeight");

  const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setShow(true);
    }
  };

  const handleScroll = () => {
    window.scrollBy({
      top: 750,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", () => toggleVisibility());
  }, []);

  return (
    <div>
      {show ? (
        <button id="scroll-btn" onClick={() => handleScroll()}>
          scroll
        </button>
      ) : null}
    </div>
  );
}
