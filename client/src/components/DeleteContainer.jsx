import React, { useState } from "react";
import { notifyError, notifySuccess } from "../helpers";
import PhotosAdmin from "./PhotosAdmin";
import CollectionsAdmin from "./CollectionsAdmin";
import StoriesAdmin from "./StoriesAdmin";
import ArtAdmin from "./ArtAdmin";
import FaqAdmin from "./FaqAdmin";
import BlogAdmin from "./BlogAdmin";
import { Button } from "antd";

export default function DeleteContainer({ id }) {
  const [photos, setPhotos] = useState([]);

  const deleteComponent = (componentId) => {
    switch (componentId) {
      case "allPhotos":
        return <PhotosAdmin photos={photos} setPhotos={setPhotos} />;
      case "collections":
        return <CollectionsAdmin />;
      case "stories":
        return <StoriesAdmin />;
      case "art":
        return <ArtAdmin />;
      case "faq":
        return <FaqAdmin />;
      case "blog":
        return <BlogAdmin />;

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
