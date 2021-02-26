import React from "react";
import usePhotoData from "../hooks/usePhotoData";
import { setRecordIds } from "../helpers";

export default function PhotosAdmin({ photos, setPhotos }) {
  const { state } = usePhotoData();

  return (
    <div className="uploadImageContainer">
      {state.photos.map((photo) => (
        <div key={photo.id}>
          <img
            src={photo.url}
            alt={photo.description}
            onClick={() => setRecordIds(photo.id, photos, setPhotos)}
            className="uploadImage"
          />
        </div>
      ))}
    </div>
  );
}
