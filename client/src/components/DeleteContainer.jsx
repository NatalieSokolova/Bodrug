import React, { useState } from "react";
import axios from "axios";
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
  const [recordsArr, setRecordsArr] = useState([]);

  const deleteComponent = (componentId) => {
    switch (componentId) {
      case "photos":
        return <PhotosAdmin photos={photos} setPhotos={setPhotos} />;
      case "collections":
        return (
          <CollectionsAdmin
            recordsArr={recordsArr}
            setRecordsArr={setRecordsArr}
          />
        );
      case "stories":
        return (
          <StoriesAdmin recordsArr={recordsArr} setRecordsArr={setRecordsArr} />
        );
      case "paintings":
        return (
          <ArtAdmin recordsArr={recordsArr} setRecordsArr={setRecordsArr} />
        );
      case "faqs":
        return (
          <FaqAdmin recordsArr={recordsArr} setRecordsArr={setRecordsArr} />
        );
      case "blogPosts":
        return (
          <BlogAdmin recordsArr={recordsArr} setRecordsArr={setRecordsArr} />
        );

      default:
        console.log("OOPS!");
    }
  };

  const handleDelete = (id, arr) => {
    console.log(`DELETE: ${id}`);
  };

  return (
    <div>
      <div className="upload-form">
        {deleteComponent(id)}
        <Button
          className="btn btn-primary post-btn"
          onClick={() => handleDelete(id, recordsArr)}
        >
          DELETE
        </Button>
      </div>
    </div>
  );
}
