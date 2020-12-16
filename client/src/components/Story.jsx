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
  const { state } = useStoryData();

  return (
    <div>
      <Carousel effect="fade" autoplay className="story-container">
        {state.stories.map((story) => (
          <div
            className="story"
            key={story.id}
            onClick={() => {
              setShowPhotos(true);
              setId(story.id);
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
            {showPhotos && story.id === id ? <SelectedStory id={id} /> : null}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
