import React from "react";
import useBlogEntryData from "../hooks/useBlogEntryData";

import { copyrightError } from "../partials";
import { toast } from "react-toastify";
import "./Blog.css";

export default function Blog() {
  toast.configure();

  const { state } = useBlogEntryData();

  return (
    <div>
      {state.blogEntries.slice(0, 1).map((blogEntry) => (
        <div className="new-post" key={1}>
          <img
            src={require(`../assets${blogEntry.coverurl}`)}
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
      ))}
      <div className="old-post-list">
        {state.blogEntries
          .slice(1, state.blogEntries.length)
          .map((blogEntry) => (
            <div className="old-post" key={blogEntry.id}>
              <img
                src={require(`../assets${blogEntry.coverurl}`)}
                alt="Yulia Bodrug"
                onContextMenu={(e) => {
                  copyrightError();
                  e.preventDefault();
                }}
              />
              <div className="title-container">
                <h1 className="old-post-title">{blogEntry.title}</h1>
                <div class="vl"></div>
                <h6 className="post-date">{blogEntry.datestring}</h6>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
