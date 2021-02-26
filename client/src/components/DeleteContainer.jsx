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
      case "photos":
        return <PhotosAdmin photos={photos} setPhotos={setPhotos} />;
      case "collections":
        return <CollectionsAdmin />;
      case "stories":
        return <StoriesAdmin />;
      case "paintings":
        return <ArtAdmin />;
      case "faqs":
        return <FaqAdmin />;
      case "blogPosts":
        return <BlogAdmin />;

      default:
        console.log("OOPS!");
    }
  };

  const handleDelete = (id) => {
    console.log(`DELETE: ${id}`);
  };

  return (
    <div>
      <div className="upload-form">
        {deleteComponent(id)}
        <Button
          className="btn btn-primary post-btn"
          onClick={() => handleDelete(id)}
        >
          DELETE
        </Button>
      </div>
    </div>
  );
}
