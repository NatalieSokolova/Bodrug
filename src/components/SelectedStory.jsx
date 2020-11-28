import React, { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./SelectedStory.css";

export default function SelectedStory(props) {
  toast.configure();

  const [state, setState] = useState({
    photoList: [],
  });

  console.log("PROPS: ", props);

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
    <div className="story">
      {renderedPhotoList.map((renderedPhoto) => (
        <div key={renderedPhoto.id}>
          <p>DESCRIPTION</p>
          {renderedPhoto.description}
          <div>
            <img
              src={require(`../assets/photos${renderedPhoto.url}`)}
              alt={renderedPhoto.description}
              onContextMenu={(e) => {
                copyrightError();
                e.preventDefault();
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
