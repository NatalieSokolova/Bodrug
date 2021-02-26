import React, { useState } from "react";
import usePaintingData from "../hooks/usePaintingData";
import { setRecordIds } from "../helpers";

export default function ArtAdmin() {
  const { state } = usePaintingData();
  const [artArr, setArtArr] = useState([]);

  return (
    <div className="uploadImageContainer">
      {state.paintings.map((painting) => (
        <div key={painting.id}>
          <img
            src={painting.url}
            alt={painting.description}
            onClick={() => setRecordIds(painting.id, artArr, setArtArr)}
            className="uploadImage"
          />
        </div>
      ))}
    </div>
  );
}
