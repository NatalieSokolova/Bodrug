import React from "react";
import "./Home.css";

export default function Home({}) {
  return (
    <div class="home-pics">
      <div class="img-container">
        <img
          class="home-img"
          src={require("../assets/photos/2-min.jpg")}
          alt="by Yuliia Bodrug"
        />
        <div class="home-text-box">
          <div class="home-text">Photos</div>
        </div>
      </div>

      <div class="home-logo" class="img-container">
        <img
          class="home-logo-box"
          src={require("../assets/logo-border.png")}
          alt="Logo"
        />
        <div class="home-text-box">
          <div class="home-text">Mission</div>
        </div>
      </div>
      <div class="img-container">
        <img
          class="home-img"
          src={require("../assets/paintings/the-new-york-public-library-R5oumqz_lhY-unsplash.jpg")}
          alt="by Yuliia Bodrug"
        />
        <div class="home-text-box">
          <div class="home-text">Paintings</div>
        </div>
      </div>
    </div>
  );
}
