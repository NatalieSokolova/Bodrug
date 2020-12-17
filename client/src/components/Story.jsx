import React, { useState, useRef, Fragment } from "react";
import SelectedStory from "./SelectedStory";
import useStoryData from "../hooks/useStoryData";
import { toast } from "react-toastify";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { copyrightError } from "../partials";
import "./Story.css";

export default function Story() {
  toast.configure();

  const slider = useRef(null);
  const [showPhotos, setShowPhotos] = useState(false);
  const [id, setId] = useState(null);
  const [autoplay, setAutoplay] = useState(true);
  const { state } = useStoryData();

  return (
    <div>
      <Fragment className="story-container">
        <div className="arrow-btn-container">
          <button
            className="arrow-btn prev"
            onClick={() => slider.current.prev()}
          >
            <LeftOutlined style={{ fontSize: "50px" }} />
          </button>
          <button
            className="arrow-btn next"
            onClick={() => slider.current.next()}
          >
            <RightOutlined style={{ fontSize: "50px" }} />
          </button>
        </div>

        <Carousel
          ref={slider}
          effect="fade"
          autoplay={autoplay}
          onClick={() => {
            setAutoplay(!autoplay);
          }}
        >
          {state.stories.map((story) => (
            <div>
              <div
                className="story"
                key={story.id}
                onClick={() => {
                  setId(story.id);
                  setShowPhotos(!showPhotos);
                  setAutoplay(!autoplay);
                }}
              >
                <div className="story-description">
                  <h1 className="story-name">{story.name}</h1>
                  {story.description}
                </div>

                <img
                  src={require(`../assets/photos${story.coverurl}`)}
                  alt={story.description}
                  onContextMenu={(e) => {
                    copyrightError();
                    e.preventDefault();
                  }}
                />
              </div>
              {showPhotos && story.id === id ? <SelectedStory id={id} /> : null}
            </div>
          ))}
        </Carousel>
      </Fragment>
    </div>
  );
}
