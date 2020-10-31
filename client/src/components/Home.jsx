import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div class="home-pics animate__animated animate__fadeIn">
      <div class="img-container">
        <img
          class="home-img "
          src={require("../assets/photos/2-min.jpg")}
          alt="by Yuliia Bodrug"
          onContextMenu={(e) => e.preventDefault()}
        />

        <a class="home-text-box" href="./photos">
          <div class="home-text">Photos</div>
        </a>
      </div>

      <div class="img-container">
        <img
          class="home-logo-box"
          src={require("../assets/logo-border.png")}
          alt="Logo"
          onContextMenu={(e) => e.preventDefault()}
        />
        <a class="home-text-box" href="./about#mission-anchor">
          <div class="home-text">Mission</div>
        </a>
      </div>
      <div class="img-container">
        <img
          class="home-img"
          src={require("../assets/paintings/the-new-york-public-library-R5oumqz_lhY-unsplash.jpg")}
          alt="by Yuliia Bodrug"
          onContextMenu={(e) => e.preventDefault()}
        />
        <a class="home-text-box" href="./art">
          <div class="home-text">Art</div>
        </a>
      </div>
    </div>
  );
}
