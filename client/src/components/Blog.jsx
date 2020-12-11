import React from "react";
import { copyrightError } from "../partials";
import { toast } from "react-toastify";

export default function Blog() {
  toast.configure();

  return (
    <div>
      <div className="new-post">
        <img
          src={require("../assets/paintings/europeana-YIfFVwDcgu8-unsplash.jpg")}
          alt="Yulia Bodrug"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
        />
      </div>
    </div>
  );
}
