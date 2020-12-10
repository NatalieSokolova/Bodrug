import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "antd";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./SelectedStory.css";

export default function SelectedStory(props) {
  toast.configure();

  const [state, setState] = useState({
    photoList: [],
  });

  const contentStyle = {
    // width: "40vw",
    height: "100%",
    width: "80vw",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    margin: "0",
  };

  const [dotPosition, setDotPosition] = React.useState("top");
  const PositionCarouselDemo = () => {
    const handlePositionChange = ({ target: { value } }) => {
      setDotPosition(value);
    };
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

  return (
    <Carousel effect="fade" dotPosition={dotPosition}>
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
    </Carousel>
  );
}
