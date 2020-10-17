import React, { useState, useEffect } from "react";
import usePhotoData from "../hooks/usePhotoData";

export default function Portfolio({}) {
  const { state, setState } = usePhotoData();
  let url;

  const photoList = state.photos.map((photo) => (
    <li key={photo.id}>
      <div>
        <img
          src={require(`../assets/photos${photo.url}`)}
          alt="Photo By Yuliia Bodrug"
        />
      </div>
      <div>{photo.description}</div>
    </li>
  ));

  return (
    <div>
      <h1>THIS IS A TEST</h1>
      <h1>Photo Portfolio</h1>
      <div>{photoList}</div>
    </div>
  );
}
