import React, { useState, useEffect } from "react";
import axios from "axios";
import { SRLWrapper } from "simple-react-lightbox";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./SelectedStory.css";

export default function SelectedStory(props) {
  toast.configure();

  const [state, setState] = useState({
    photoList: [],
  });

  const contentStyle = {
    height: "100%",
    width: "80vw",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    margin: "0",
  };

  const getPhotosByStoryId = useEffect(() => {
    axios({
      method: "GET",
      url: `/stories/${props.id}/photos`,
    })
      .then((result) => {
        setState((prev) => ({ ...prev, photoList: result.data }));
      })
      .catch((err) => console.log(err));
  }, [props.id]);

  const renderedPhotoList = state.photoList;

  const options = {
    buttons: {
      showDownloadButton: false,
    },
  };

  return (
    <div>
      <SRLWrapper options={options}>
        {renderedPhotoList.map((renderedPhoto) => (
          <div className="selected" key={renderedPhoto.id}>
            <p className="photo-description">{renderedPhoto.description}</p>

            <img
              style={contentStyle}
              className="story-img"
              src={require(`../assets/photos${renderedPhoto.url}`)}
              alt={renderedPhoto.description}
              onContextMenu={(e) => {
                copyrightError();
                e.preventDefault();
              }}
            />
          </div>
        ))}
      </SRLWrapper>
    </div>
  );
}
