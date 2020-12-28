import React, { useState } from "react";
import "./ScrollBtn.css";

export default function ScrollBtn() {
  const [show, setShow] = useState(false);
  return <div>{show ? <button id="scroll-btn">scroll</button> : null}</div>;
}
