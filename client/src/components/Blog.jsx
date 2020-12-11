import React from "react";
import { copyrightError } from "../partials";
import { toast } from "react-toastify";
import "./Blog.css";

export default function Blog() {
  toast.configure();

  return (
    <div>
      <div className="new-post">
        <img
          src={require("../assets/art/falco-negenman-kdNs6NZMaD4-unsplash.jpg")}
          alt="Yulia Bodrug"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
        />
        <h1 className="new-post-title">New Post Title</h1>
        <h6 className="post-date">April 6, 2020</h6>
        <hr />
      </div>

      <div className="old-post-list">
        <div className="old-post">
          <img
            src={require("../assets/art/europeana-qi9jveT9X6A-unsplash.jpg")}
            alt="Yulia Bodrug"
            onContextMenu={(e) => {
              copyrightError();
              e.preventDefault();
            }}
          />
          <div className="title-container">
            <h1 className="old-post-title">Old Post Title</h1>
            <div class="vl"></div>
            <h6 className="post-date">April 3, 2020</h6>
          </div>
        </div>
        <div className="old-post">
          <img
            src={require("../assets/art/sergio-souza-gOzD9CZTwXw-unsplash.jpg")}
            alt="Yulia Bodrug"
            onContextMenu={(e) => {
              copyrightError();
              e.preventDefault();
            }}
          />
          <div className="title-container">
            <h1 className="old-post-title">Old Post Title</h1>
            <div class="vl"></div>
            <h6 className="post-date">April 3, 2020</h6>
          </div>
        </div>
        <div className="old-post">
          <img
            src={require("../assets/photos/19-min.jpg")}
            alt="Yulia Bodrug"
            onContextMenu={(e) => {
              copyrightError();
              e.preventDefault();
            }}
          />
          <div className="title-container">
            <h1 className="old-post-title">Old Post Title</h1>
            <div class="vl"></div>
            <h6 className="post-date">May 26, 2020</h6>
          </div>
        </div>
        <div className="old-post">
          <img
            src={require("../assets/photos/20-min.jpg")}
            alt="Yulia Bodrug"
            onContextMenu={(e) => {
              copyrightError();
              e.preventDefault();
            }}
          />
          <div className="title-container">
            <h1 className="old-post-title">Old Post Title</h1>
            <div class="vl"></div>
            <h6 className="post-date">June 6, 2020</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
