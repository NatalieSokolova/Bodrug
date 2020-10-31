import React from "react";
import usePaintingData from "../hooks/usePaintingData";
import { SRLWrapper } from "simple-react-lightbox";
import "./Painting.css";

export default function Painting({}) {
  const { state, setState } = usePaintingData();
  const options = {
    buttons: {
      showDownloadButton: false,
    },
  };

  return (
    <div className="outsideContainer">
      {state.paintings.map((painting) => (
        <div key={painting.id} className="paintingContainer">
          <img
            className="painting"
            src={require(`../assets/paintings${painting.url}`)}
            alt="painting By Yuliia Bodrug"
          />
          <div className="painting-description-card">
            <div>
              {painting.description}
              <div className="painting-info">
                MATERIALS: {painting.materials}
                <br />
                YEAR: {painting.year}
                <br />
                CAD {painting.price}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
