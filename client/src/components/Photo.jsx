import React, { useState, useEffect } from "react";
import usePhotoData from "../hooks/usePhotoData";
import "./Photo.css";

export default function Portfolio({}) {
  const { state, setState } = usePhotoData();
  return (
    <span>
      <div className="outsideContainer">
        {state.photos.map((photo) => (
          <div key={photo.id} className="photoContainer">
            <img
              className="photo"
              src={require(`../assets/photos${photo.url}`)}
              alt="Photo By Yuliia Bodrug"
            />
            <div className="description">{photo.description}</div>
          </div>
        ))}
      </div>
    </span>
  );
}
