import React from "react";
import usePhotoData from "../hooks/usePhotoData";
import { SRLWrapper } from "simple-react-lightbox";
import "./Photo.css";

export default function Portfolio() {
  const { state, setState } = usePhotoData();

  return (
    <div className="outsideContainer">
      <a href="#">
        <SRLWrapper>
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
