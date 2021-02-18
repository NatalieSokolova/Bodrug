import React, { useState, useRef, Fragment } from "react";
import SelectedStory from "./SelectedStory";
import useStoryData from "../hooks/useStoryData";
import { toast } from "react-toastify";
import { Carousel } from "antd";
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
    <div className="story-container">
      <Fragment>
        <div className="arrow-btn-container">
          <button
            className="arrow-btn prev"
            onClick={() => {
              slider.current.prev();
              setAutoplay(true);
              setShowPhotos(false);
            }}
          >
            <LeftOutlined style={{ fontSize: "50px" }} />
          </button>
          <button
            className="arrow-btn next"
            onClick={() => {
              slider.current.next();
              setAutoplay(true);
              setShowPhotos(false);
            }}
          >
            <RightOutlined style={{ fontSize: "50px" }} />
          </button>
        </div>

        <Carousel ref={slider} effect="fade" dots={false} autoplay={autoplay}>
          {state.stories.map((story) => (
            <div key={story.id}>
              <div
                className="story"
                onClick={() => {
                  setId(story.id);
                  setShowPhotos(true);
                  setAutoplay(false);
                }}
              >
                <div className="story-description">
                  <h1 className="story-name">{story.name}</h1>
                  {story.description}
                </div>

                <img
                  src={story.coverurl}
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
