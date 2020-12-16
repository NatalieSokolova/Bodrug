import React, { useState } from "react";
import SelectedStory from "./SelectedStory";
import useStoryData from "../hooks/useStoryData";
import { toast } from "react-toastify";
// import { Carousel } from "antd";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
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
      {/* <Carousel
        effect="fade"
        autoplay={autoplay}
        className="story-container"
        // onClick={() => {
        //   setAutoplay(!autoplay);
        // }}
      > */}
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={state.stories.length}
      >
        {state.stories.map((story, index) => (
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
      </CarouselProvider>
      {/* </Carousel> */}
    </div>
  );
}
