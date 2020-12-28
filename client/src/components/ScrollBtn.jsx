import React, { useState, useEffect } from "react";
import { DownCircleOutlined } from "@ant-design/icons";
import "./ScrollBtn.css";

export default function ScrollBtn() {
  const [show, setShow] = useState(false);
  const [arrow, setArrow] = useState("down");

  const toggleVisibility = () => {
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = windowScroll / height;
    if (scrolled === 1) {
      console.log("SCROLLED: ", scrolled);
    }
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
