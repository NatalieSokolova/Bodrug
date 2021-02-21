import React from "react";
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

export default function SelectedBlog({ blog, setBlog }) {
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

  const match = useRouteMatch("/blog/:slug");
  const postSlug = match.params.slug;

  const blogPost = state.blogEntries.find(
    (blogEntry) => blogEntry.slug === postSlug
  );

  if (blogPost) {
    return (
      <div>
        <div className="new-post">
          <img
            src={blogPost.coverurl}
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
          <SRLWrapper options={options}>
            <Carousel effect="fade" autoplay className="blog-carousel">
              {blogPost.photourls.map((photourl) => (
                <img
                  key={photourl}
                  style={contentStyle}
                  src={photourl}
                  alt="Yulia Bodrug"
                  className="blog-carousel-img"
                  onContextMenu={(e) => {
                    copyrightError();
                    e.preventDefault();
                  }}
                />
              ))}
            </Carousel>
          </SRLWrapper>
        </div>
      </div>
    );
  }
  return null;
}
