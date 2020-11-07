import React from "react";
// import useCollectionPhotoData from "../hooks/useCollectionPhotoData";

import SelectedCollection from "./SelectedCollection";

import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./Collection.css";

export default function Collection() {
  toast.configure();

  // const { state } = useCollectionPhotoData();
  // console.log("Photos STATE: ", state.collectionPhotos);

  // const collectionList = state.collections.map((collection) => (
  //   <div key={collection.id}>{collection.description}</div>
  // ));

  return (
    <div className="collection">
      <div>
        <img
          src={require("../assets/photos/6-min.jpg")}
          alt="collection cover"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
          className="collection-tile"
        />
      </div>
      <div>
        <img
          src={require("../assets/photos/17-min.jpg")}
          alt="collection cover"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
          className="collection-tile"
        />
      </div>
      <div>
        <img
          src={require("../assets/photos/19-min.jpg")}
          alt="collection cover"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
          className="collection-tile"
        />
      </div>
      <div>
        <img
          src={require("../assets/photos/20-min.jpg")}
          alt="collection cover"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
          className="collection-tile"
        />
      </div>
      {/* <SelectedCollection /> */}
    </div>
  );
}
