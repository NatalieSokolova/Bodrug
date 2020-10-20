import React from "react";
import usePhotoData from "../hooks/usePhotoData";
import "./Photo.css";

export default function Photo({}) {
  const { state, setState } = usePhotoData();
  // let url;

  const photoList = state.photos.map((photo) => (
    <div key={photo.id} className="photoContainer">
      <span>
        <img
          className="photo"
          src={require(`../assets/photos${photo.url}`)}
          alt="Photo By Yuliia Bodrug"
        />
      </span>
      <div>{photo.description}</div>
      <br />
    </div>
  ));

  return (
    <span>
      <h1>Photo Portfolio</h1>
      <div>{photoList}</div>
    </span>
  );
}
