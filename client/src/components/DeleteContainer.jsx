import React, { useState } from "react";
import usePhotoData from "../hooks/usePhotoData";
import { notifyError, notifySuccess, setPhotoIds } from "../helpers";
import { Button } from "antd";

export default function DeleteContainer({ id, setId }) {
  const { state } = usePhotoData();
  const [photos, setPhotos] = useState([]);

  const deleteComponent = (componentId) => {
    console.log("ID: ", componentId);

    switch (componentId) {
      case "allPhotos":
        console.log("allPhotos!");
        return (
          <div className="uploadImageContainer">
            {state.photos.map((photo) => (
              <div key={photo.id}>
                <img
                  src={photo.url}
                  alt={photo.description}
                  onClick={() => setPhotoIds(photo.id, photos, setPhotos)}
                  className="uploadImage"
                />
              </div>
            ))}
          </div>
        );
      case "collections":
        console.log("collections!");
        return <div>supsupsup</div>;
      case "stories":
        console.log("stories!");
        return <div>supsupsup</div>;
      case "art":
        console.log("art!");
        return <div>supsupsup</div>;
      case "faq":
        console.log("faq!");
        return <div>supsupsup</div>;
      case "blog":
        console.log("blog!");
        return <div>supsupsup</div>;

      default:
        console.log("OOPS!");
    }
  };
  return (
    <div>
      <div className="upload-form">
        {deleteComponent(id)}
        <Button className="btn btn-primary post-btn">DELETE</Button>
      </div>
    </div>
  );
}
