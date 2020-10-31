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
      <a href="#">
        <SRLWrapper options={options}>
          {!state.paintings ? (
            <span>Loading...</span>
          ) : (
            <div className="row">
              {state.paintings.map((painting) => (
                <div key={painting.id} className="paintingContainer">
                  <img
                    src={require(`../assets/paintings${painting.url}`)}
                    alt={[
                      painting.description,
                      `YEAR: ${painting.year}`,
                      `MATERIALS: ${painting.materials}`,
                      `CAD${painting.price}`,
                    ]}
                    alt={[
                      painting.description,
                      `YEAR: ${painting.year}`,
                      `MATERIALS: ${painting.materials}`,
                      `CAD${painting.price}`,
                    ]}
                    className="painting"
                    onContextMenu={(e) => {
                      alert("Sorry, all the images are copyright");
                      e.preventDefault();
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </SRLWrapper>
      </a>
    </div>
  );
}
