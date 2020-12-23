import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
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

  const match = useRouteMatch("/blog/:id");
  const postId = Number(match.params.id);
  console.log("postId: ", postId);

  const [state, setState] = useState({
    blogPost: {},
  });

  useEffect(() => {
    axios({
      method: "GET",
      url: `/blogEntries/${postId}`,
    })
      .then((result) =>
        setState((prev) => ({ ...prev, blogPost: result.data[0] }))
      )
      .catch((err) => console.log(err));
  }, [postId]);

  console.log("POST: ", state.blogPost.coverurl);

  return (
    <div>
      {/* <div className="new-post">
        <img
          src={require(`../assets${state.blogPost.coverurl}`)}
          alt="Yulia Bodrug"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
        />
        <h1 className="new-post-title">{state.blogPost.title}</h1>
        <h6 className="post-date">{state.blogPost.datestring}</h6>
        <hr />
      </div>

      <div className="blog-article">{state.blogPost.article}</div>
      <div>
        <Carousel effect="fade" autoplay className="blog-carousel">
          {state.blogPost.photourls.map((photourl) => (
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
      </div> */}
    </div>
  );
}
