import React, { useState, useEffect } from "react";
import usePhotoData from "../hooks/usePhotoData";

export default function Phortfolio({}) {
  const { state, setState } = usePhotoData();

  const photoList = state.photos.map((photo) => (
    <li>
      <div>
        <img src={`../assets/photos/${photo.url}`} />
      </div>
      <div>{photo.description}</div>
    </li>
  ));

  return (
    <div>
      <h1>Photo Portfolio</h1>
      <div>{photoList}</div>
    </div>
  );
}
