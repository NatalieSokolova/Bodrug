import React from "react";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./Home.css";

export default function Home() {
  toast.configure();

  return (
    <div className="home-pics animate__animated animate__fadeIn">
      <div className="img-container">
        <img
          className="home-img "
          src={require("../assets/photos/2-min.jpg")}
          alt="by Yuliia Bodrug"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
        />

        <a className="home-text-box" href="./photos">
          <div className="home-text">Photos</div>
        </a>
      </div>

      <div className="img-container">
        <img
          className="home-logo-box"
          src={require("../assets/logo-border.png")}
          alt="Logo"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
        />
        <a className="home-text-box" href="./about#mission-anchor">
          <div className="home-text">Mission</div>
        </a>
      </div>
      <div className="img-container">
        <img
          className="home-img"
          src={require("../assets/paintings/the-new-york-public-library-R5oumqz_lhY-unsplash-min.jpg")}
          alt="by Yuliia Bodrug"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
        />
        <a className="home-text-box" href="./art">
          <div className="home-text">Art</div>
        </a>
      </div>
    </div>
  );
}
