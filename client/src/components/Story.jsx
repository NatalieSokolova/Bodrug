import React, { useState } from "react";
import SelectedStory from "./SelectedStory";
import useStoryData from "../hooks/useStoryData";
import { Card } from "antd";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./Story.css";

const { Meta } = Card;

export default function Story() {
  toast.configure();

  const [showPhotos, setShowPhotos] = useState(false);
  const [id, setId] = useState(null);
  const { state } = useStoryData();

  return (
    <div>
      {state.stories.map((story) => (
        <div className="story-tile" key={story.id}>
          <Card
            cover={
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
            }
          >
            <div className="story-description">
              <Meta title="Story Name" description={story.description} />
            </div>
          </Card>
          {showPhotos && story.id === id ? <SelectedStory id={id} /> : null}
        </div>
      ))}
    </div>
  );
}
