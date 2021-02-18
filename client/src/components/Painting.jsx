import React from "react";
import usePaintingData from "../hooks/usePaintingData";
import { SRLWrapper } from "simple-react-lightbox";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./Photo.css";

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
      <SRLWrapper options={options}>
        {!state.paintings ? (
          <span>Loading...</span>
        ) : (
          <div className="imageContainer">
            {state.paintings.map((painting) => (
              <div key={painting.id}>
                <img
                  src={painting.url}
                  alt={[
                    painting.description,
                    `YEAR: ${painting.year}`,
                    `MATERIALS: ${painting.materials}`,
                    `CAD${painting.price}`,
                  ]}
                  className="image"
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
