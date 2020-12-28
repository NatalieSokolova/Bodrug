import React from "react";
import usePaintingData from "../hooks/usePaintingData";
import ScrollBtn from "./ScrollBtn";
import { SRLWrapper } from "simple-react-lightbox";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./Painting.css";

export default function Painting() {
  toast.configure();

  const { state } = usePaintingData();
  const options = {
    buttons: {
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
    },
    caption: {
      showCaption: false,
    },
  };

  return (
    <div className="outsideContainer">
      <ScrollBtn />
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
                  className="painting"
                  onContextMenu={(e) => {
                    copyrightError();
                    e.preventDefault();
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </SRLWrapper>
    </div>
  );
}
