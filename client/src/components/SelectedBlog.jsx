import React from "react";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import { Carousel } from "antd";
import { SRLWrapper } from "simple-react-lightbox";

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
        <Carousel effect="fade" autoplay className="blog-carousel">
          {blog.photourls.map((photourl) => (
            <SRLWrapper options={options}>
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
            </SRLWrapper>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
