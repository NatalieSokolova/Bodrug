import React from "react";
import usePaintingData from "../hooks/usePaintingData";
import { setRecordIds } from "../helpers";

export default function ArtAdmin({ recordsArr, setRecordsArr }) {
  const { state } = usePaintingData();

  return (
    <div className="uploadImageContainer">
      {state.paintings.map((painting) => (
        <div key={painting.id}>
          <img
            src={painting.url}
            alt={painting.description}
            onClick={() => setRecordIds(painting.id, recordsArr, setRecordsArr)}
            className="uploadImage"
          />
        </div>
      ))}
    </div>
  );
}
