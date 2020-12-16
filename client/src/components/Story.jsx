import React, { useState } from "react";
import SelectedStory from "./SelectedStory";
import useStoryData from "../hooks/useStoryData";
import { toast } from "react-toastify";
import { Carousel } from "antd";
import { copyrightError } from "../partials";
import "./Story.css";

export default function Story() {
  toast.configure();

  const [showPhotos, setShowPhotos] = useState(false);
  const [id, setId] = useState(null);
  const [autoplay, setAutoplay] = useState(true);
  const { state } = useStoryData();

  return (
    <div>
      <Carousel
        effect="fade"
        autoplay={autoplay}
        className="story-container"
        // onClick={() => {
        //   setAutoplay(!autoplay);
        // }}
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
    </div>
  );
}
