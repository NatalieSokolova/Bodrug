import React, { useState } from "react";
import usePhotoData from "../hooks/usePhotoData";
import useCollectionData from "../hooks/useCollectionData";
import { notifyError, notifySuccess, setRecordIds } from "../helpers";
import PhotosAdmin from "./PhotosAdmin";
import CollectionsAdmin from "./CollectionsAdmin";
import { Button } from "antd";

export default function DeleteContainer({ id }) {
  const [photos, setPhotos] = useState([]);

  const deleteComponent = (componentId) => {
    console.log("ID: ", componentId);

    switch (componentId) {
      case "allPhotos":
        console.log("allPhotos!");
        return <PhotosAdmin photos={photos} setPhotos={setPhotos} />;
      case "collections":
        console.log("collections!");
        return <CollectionsAdmin />;
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
