import React, { useState, useEffect } from "react";
import { DownCircleOutlined } from "@ant-design/icons";
import "./ScrollBtn.css";

export default function ScrollBtn() {
  const [show, setShow] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setShow(true);
    }
  };

  const handleScroll = () => {
    window.scrollBy({
      top: 800,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", () => toggleVisibility());
  }, []);

  return (
    <div>
      {show ? (
        <DownCircleOutlined id="scroll-btn" onClick={() => handleScroll()} />
      ) : null}
    </div>
  );
}
