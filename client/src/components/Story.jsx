import React, { useState } from "react";
import SelectedStory from "./SelectedStory";
import useStoryData from "../hooks/useStoryData";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./Story.css";

export default function Story() {
  toast.configure();

  const [showPhotos, setShowPhotos] = useState(false);
  const [id, setId] = useState(null);
  const { state } = useStoryData();

  return (
    <div>
      {state.stories.map((story) => (
        <div className="story" key={story.id}>
          <img
            src={require(`../assets/photos${story.coverurl}`)}
            alt={story.description}
            onContextMenu={(e) => {
              copyrightError();
              e.preventDefault();
            }}
            onClick={() => {
              setShowPhotos(!showPhotos);
              setId(story.id);
            }}
          />
          <div className="story-description">{story.description}</div>

          {showPhotos && story.id === id ? <SelectedStory id={id} /> : null}
        </div>
      ))}
    </div>
  );
}
