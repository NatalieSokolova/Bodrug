import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import useBlogEntryData from "../hooks/useBlogEntryData";

export default function SelectedBlog({ blog, setBlog }) {
  const id = blog.id === 0 ? blog.id : blog.id - 1;
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

      <div>{blog.article}</div>
      <div>
        {blog.photourls.map((photourl) => (
          <img
            key={photourl}
            src={require(`../assets${photourl}`)}
            alt="Yulia Bodrug"
            onContextMenu={(e) => {
              copyrightError();
              e.preventDefault();
            }}
          />
        ))}
      </div>
    </div>
  );
}
