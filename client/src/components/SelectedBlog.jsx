import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import { Carousel } from "antd";

const contentStyle = {
  maxHeight: "40vh",
  color: "#fff",
  lineHeight: "40vh",
  textAlign: "center",
};

export default function SelectedBlog({ blog, setBlog }) {
  toast.configure();

  console.log("BLOG: ", blog);

  return (
    <div>
      <div className="new-post">
        <img
          src={require(`../assets${blog.coverurl}`)}
          alt="Yulia Bodrug"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
        />
        <h1 className="new-post-title">{blog.title}</h1>
        <h6 className="post-date">{blog.datestring}</h6>
        <hr />
      </div>

      <div className="blog-article">{blog.article}</div>
      <div>
        <Carousel autoplay className="blog-carousel">
          {blog.photourls.map((photourl) => (
            <img
              key={photourl}
              style={contentStyle}
              src={require(`../assets${photourl}`)}
              alt="Yulia Bodrug"
              className="blog-carousel-img"
              onContextMenu={(e) => {
                copyrightError();
                e.preventDefault();
              }}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
