import React from "react";
import usePhotoData from "../hooks/usePhotoData";
import ScrollBtn from "./ScrollBtn";
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
      <ScrollBtn />
      <SRLWrapper options={options}>
        {!state.photos ? (
          <span>Loading...</span>
        ) : (
          <div className="row">
            {state.photos.map((photo) => (
              <div key={photo.id} className="photoContainer">
                <img
                  src={require(`../assets/photos${photo.url}`)}
                  alt={photo.description}
                  className="photo"
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
