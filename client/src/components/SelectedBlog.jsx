import React, { useState } from "react";
import useBlogEntryData from "../hooks/useBlogEntryData";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import { Carousel } from "antd";
import { SRLWrapper } from "simple-react-lightbox";
import { useRouteMatch } from "react-router-dom";

const contentStyle = {
  maxHeight: "40vh",
  width: "100%",
  color: "#fff",
  lineHeight: "40vh",
  textAlign: "center",
  cursor: "pointer",
};

export default function SelectedBlog({ blog }) {
  toast.configure();

  const options = {
    buttons: {
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
    },
    caption: {
      showCaption: false,
    },
  };

  const { state } = useBlogEntryData();

  const match = useRouteMatch("/blog/:id");
  const postId = match.params.id;
  console.log("postId: ", postId);

  return (
    <div>
      {state.blogEntries.map((blogPost) => (
        <div key={blogPost.id}>
          <div className="new-post">
            {console.log("BLOG: ", blogPost)}
            <img
              src={require(`../assets${blogPost.coverurl}`)}
              alt="Yulia Bodrug"
              onContextMenu={(e) => {
                copyrightError();
                e.preventDefault();
              }}
            />
            <h1 className="new-post-title">{blogPost.title}</h1>
            <h6 className="post-date">{blogPost.datestring}</h6>
            <hr />
          </div>

          <div className="blog-article">{blogPost.article}</div>
          <div>
            <Carousel effect="fade" autoplay className="blog-carousel">
              {blogPost.photourls.map((photourl) => (
                <SRLWrapper options={options} key={photourl}>
                  <img
                    style={contentStyle}
                    src={require(`../assets${photourl}`)}
                    alt="Yulia Bodrug"
                    className="blog-carousel-img"
                    onContextMenu={(e) => {
                      copyrightError();
                      e.preventDefault();
                    }}
                  />
                </SRLWrapper>
              ))}
            </Carousel>
          </div>
        </div>
      ))}
    </div>
  );
}
