import React, { useState, useEffect } from "react";
import axios from "axios";
import { SRLWrapper } from "simple-react-lightbox";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./SelectedCollection.css";

export default function SelectedCollection(props) {
  toast.configure();

  const [state, setState] = useState({
    photoList: [],
  });

  console.log("PROPS: ", props);

  useEffect(() => {
    axios({
      method: "GET",
      url: `/collections/${props.id}/photos`,
    })
      .then((result) => {
        setState((prev) => ({ ...prev, photoList: result.data }));
      })
      .catch((err) => console.log(err));
  }, [props.id]);

  const renderedPhotoList = state.photoList;

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
    <SRLWrapper options={options}>
      <div className="collection">
        {renderedPhotoList.reverse().map((renderedPhoto) => (
          <div key={renderedPhoto.id}>
            <div>
              <img
                src={require(`../assets/photos${renderedPhoto.url}`)}
                alt={renderedPhoto.description}
                onContextMenu={(e) => {
                  copyrightError();
                  e.preventDefault();
                }}
                className="sel-collection-img"
              />
            </div>
          </div>
        ))}
      </div>
    </SRLWrapper>
  );
}
