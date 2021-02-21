import React from "react";
import { Link } from "react-router-dom";
import useBlogEntryData from "../hooks/useBlogEntryData";
import { copyrightError } from "../partials";
import { toast } from "react-toastify";
import "./BlogPost.css";

export default function BlogPost({ blog, setBlog }) {
  toast.configure();

  const { state } = useBlogEntryData();

  return (
    <div>
      {state.blogPosts.slice(0, 1).map((blogEntry) => (
        <Link to={`/blog/${blogEntry.slug}`} key={1}>
          <div className="new-post">
            <img
              src={blogEntry.coverurl}
              alt="Yulia Bodrug"
              onContextMenu={(e) => {
                copyrightError();
                e.preventDefault();
              }}
            />
            <h1 className="new-post-title">{blogEntry.title}</h1>
            <h6 className="post-date">{blogEntry.datestring}</h6>
            <hr />
          </div>
        </Link>
      ))}
      <div className="old-post-list">
        {state.blogPosts.slice(1, state.blogPosts.length).map((blogEntry) => (
          <Link to={`/blog/${blogEntry.slug}`} key={blogEntry.id}>
            <div className="old-post">
              <img
                src={blogEntry.coverurl}
                alt="Yulia Bodrug"
                onContextMenu={(e) => {
                  copyrightError();
                  e.preventDefault();
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
