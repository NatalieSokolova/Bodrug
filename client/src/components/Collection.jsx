import React, { useState } from "react";
import SelectedCollection from "./SelectedCollection";
import useCollectionData from "../hooks/useCollectionData";
import ScrollBtn from "./ScrollBtn";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./Collection.css";

export default function Collection() {
  toast.configure();

  const { state } = useCollectionData();
  const [showPhotos, setShowPhotos] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [id, setId] = useState(null);

  return (
    <div className="collection-container">
      <ScrollBtn />
      {state.collections.map((collection) => (
        <div
          className="collection-tile"
          key={collection.id}
          onClick={() => {
            setShowPhotos(true);
            setShowDescription(true);
            setId(collection.id);
          }}
        >
          <h1 className="collection-name">{collection.name}</h1>
          <img
            src={require(`../assets/photos${collection.coverurl}`)}
            alt={collection.description}
            onContextMenu={(e) => {
              copyrightError();
              e.preventDefault();
            }}
          />

          {showDescription && showPhotos && collection.id === id ? (
            <div>
              <div className="collection-description">
                {collection.description}
              </div>
              <SelectedCollection id={id} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
