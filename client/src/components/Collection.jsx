import React, { useState } from "react";
import SelectedCollection from "./SelectedCollection";

import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./Collection.css";

const idList = [1, 2, 3, 4];

export default function Collection() {
  toast.configure();

  const [showPhotos, setShowPhotos] = useState(false);
  const [id, setId] = useState(null);

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
          onClick={() => {
            setShowPhotos(!showPhotos);
            setId(idList[0]);
          }}
          className="collection-tile"
        />
        {showPhotos ? <SelectedCollection id={id} /> : null}
      </div>
      <div>
        <img
          src={require("../assets/photos/17-min.jpg")}
          alt="collection cover"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
          onClick={() => {
            setShowPhotos(!showPhotos);
            setId(idList[1]);
          }}
          className="collection-tile"
        />
        {showPhotos ? <SelectedCollection id={id} /> : null}
      </div>
      <div>
        <img
          src={require("../assets/photos/19-min.jpg")}
          alt="collection cover"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
          onClick={() => {
            setShowPhotos(!showPhotos);
            setId(idList[2]);
          }}
          className="collection-tile"
        />
        {showPhotos ? <SelectedCollection id={id} /> : null}
      </div>
      <div>
        <img
          src={require("../assets/photos/20-min.jpg")}
          alt="collection cover"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
          onClick={() => {
            setShowPhotos(!showPhotos);
            setId(idList[3]);
          }}
          className="collection-tile"
        />
        {showPhotos ? <SelectedCollection id={id} /> : null}
      </div>
      {/* <SelectedCollection /> */}
    </div>
  );
}
