import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import useBlogEntryData from "../hooks/useBlogEntryData";
import SelectedBlog from "./SelectedBlog";

import { copyrightError } from "../partials";
import { toast } from "react-toastify";
import "./Blog.css";

export default function Blog({ blog, setBlog }) {
  toast.configure();

  const { state } = useBlogEntryData();
  const [id, setId] = useState(null);

  return (
    <div>
      {state.blogEntries.slice(0, 1).map((blogEntry) => (
        <Link to={`/blog/${blogEntry.title}`} key={1}>
          <div className="new-post">
            <img
              src={require(`../assets${blogEntry.coverurl}`)}
              alt="Yulia Bodrug"
              onContextMenu={(e) => {
                copyrightError();
                e.preventDefault();
              }}
              onClick={() => {
                setId(blogEntry.id);
                setBlog(blogEntry);
              }}
            />
            <h1 className="new-post-title">{blogEntry.title}</h1>
            <h6 className="post-date">{blogEntry.datestring}</h6>
            <hr />
          </div>
        </Link>
      ))}
      <div className="old-post-list">
        {state.blogEntries
          .slice(1, state.blogEntries.length)
          .map((blogEntry) => (
            <Link to={`/blog/${blogEntry.title}`} key={blogEntry.id}>
              <div className="old-post">
                <img
                  src={require(`../assets${blogEntry.coverurl}`)}
                  alt="Yulia Bodrug"
                  onContextMenu={(e) => {
                    copyrightError();
                    e.preventDefault();
                  }}
                  onClick={() => {
                    setId(blogEntry.id);
                    setBlog(blogEntry);
                  }}
                />
                <div className="title-container">
                  <h1 className="old-post-title">{blogEntry.title}</h1>
                  <div className="vl"></div>
                  <h6 className="post-date">{blogEntry.datestring}</h6>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
