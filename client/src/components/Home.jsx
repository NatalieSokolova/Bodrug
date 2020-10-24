import React from "react";
import "./Home.css";

export default function Home({}) {
  return (
    <div>
      <span id="photo1-home">
        <img
          src={require("../assets/photos/2-min.jpg")}
          alt="by Yuliia Bodrug"
        />
      </span>
      <span id="painting-home">
        <img
          src={require("../assets/paintings/sergio-souza-gOzD9CZTwXw-unsplash.jpg")}
          alt="by Yuliia Bodrug"
        />
      </span>
      <span id="photo2-home">
        <img
          src={require("../assets/photos/15-min.jpg")}
          alt="by Yuliia Bodrug"
        />
      </span>
    </div>
  );
}
