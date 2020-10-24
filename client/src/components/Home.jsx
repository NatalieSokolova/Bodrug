import React from "react";
import "./Home.css";

export default function Home({}) {
  return (
    <div class="home-pics">
      <span>
        <img
          class="home-img"
          src={require("../assets/photos/2-min.jpg")}
          alt="by Yuliia Bodrug"
        />
      </span>
      <span>
        <img
          class="home-img"
          src={require("../assets/photos/1-min.jpg")}
          alt="by Yuliia Bodrug"
        />
      </span>
      <span>
        <img
          class="home-img"
          src={require("../assets/paintings/the-new-york-public-library-R5oumqz_lhY-unsplash.jpg")}
          alt="by Yuliia Bodrug"
        />
      </span>
    </div>
  );
}
