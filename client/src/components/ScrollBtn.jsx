import React, { useState, useEffect } from "react";
import { DownCircleOutlined, UpCircleOutlined } from "@ant-design/icons";
import "./ScrollBtn.css";

export default function ScrollBtn() {
  const [show, setShow] = useState(false);
  const [arrow, setArrow] = useState("down");

  const handleScroll = () => {
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = windowScroll / height;
    if (scrolled >= 0.9) {
      setArrow("up");
    } else if (scrolled <= 0.15) {
      setArrow("down");
      // setShow(false);
    }

    if (window.pageYOffset > 150) {
      setShow(true);
    }
  };

  const handleClick = () => {
    if (arrow === "down") {
      window.scrollBy({
        top: 800,
        behavior: "smooth",
      });
    } else if (arrow === "up") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", () => handleScroll());
  }, []);

  return (
    <div>
      {show ? (
        arrow === "down" ? (
          <DownCircleOutlined id="scroll-btn" onClick={() => handleClick()} />
        ) : (
          <UpCircleOutlined id="scroll-btn" onClick={() => handleClick()} />
        )
      ) : null}
    </div>
  );
}
