import React, { useState } from "react";
import SelectedCollection from "./SelectedCollection";
import useCollectionData from "../hooks/useCollectionData";

import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./Collection.css";

// const idList = [1, 2, 3, 4];

export default function Collection() {
  toast.configure();

  const [showPhotos, setShowPhotos] = useState(false);
  const [id, setId] = useState(null);
  const { state } = useCollectionData();

  return (
    <div>
      {state.collections.map((collection) => (
        <div className="collection-tile" key={collection.id}>
          <h1
            class="collection-name"
            onClick={() => {
              setShowPhotos(!showPhotos);
              setId(collection.id);
            }}
          >
            {collection.name}
          </h1>
          <img
            src={require(`../assets/photos${collection.coverurl}`)}
            alt={collection.description}
            onContextMenu={(e) => {
              copyrightError();
              e.preventDefault();
            }}
            onClick={() => {
              setShowPhotos(!showPhotos);
              setId(collection.id);
            }}
          />
          {showPhotos && collection.id === id ? (
            <SelectedCollection id={id} />
          ) : null}

          <div className="collection-description">{collection.description}</div>
        </div>
      ))}
    </div>
  );
}
