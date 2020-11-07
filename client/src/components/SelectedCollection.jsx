import React from "react";
import useCollectionPhotoData from "../hooks/useCollectionPhotoData";

import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./SelectedCollection.css";

export default function SelectedCollection() {
  toast.configure();

  const { state } = useCollectionPhotoData();
  console.log("STATE: ", state);

  return (
    <div className="collection">
      {state.collectionPhotos.map((collectionPhoto) => (
        <div key={collectionPhoto.id}>
          <p>DESCRIPTION</p>
          {collectionPhoto.description}
          <div>
            <img
              src={require(`../assets/photos${collectionPhoto.url}`)}
              alt={collectionPhoto.description}
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
