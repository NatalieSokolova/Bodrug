import React from "react";
import usePhotoData from "../hooks/usePhotoData";
import { SRLWrapper } from "simple-react-lightbox";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./Photo.css";

export default function Portfolio() {
  toast.configure();

  const { state } = usePhotoData();

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
        {!state.photos ? (
          <span>Loading...</span>
        ) : (
          <div className="imageContainer">
            {state.photos.map((photo) => (
              <div key={photo.id}>
                <img
                  src={photo.url}
                  alt={photo.description}
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
