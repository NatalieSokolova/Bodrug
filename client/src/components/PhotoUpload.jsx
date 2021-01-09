import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { CloudinaryContext } from "cloudinary-react";
import { openUploadWidget } from "../CloudinaryService";
import { notifyError, notifySuccess } from "../partials";

export default function PhotoUpload() {
  toast.configure();

  const [images, setImages] = useState([]);

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "nataliesklv",
      tags: ["bodrug"],
      uploadPreset: "qtiu4svf",
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if (photos.event === "success") {
          console.log("IMAGE UPLOADED!");
          notifySuccess("Woo-hoo! Image posted successfully!");
          setImages([...images, photos.info.public_id]);
          console.log("IMAGES: ", images);
        }
      } else {
        notifyError("OOPS! Something went wrong. Please, try again");
        console.log("ERROR: ", error);
      }
    });
  };

  return (
    <div className="upload-form">
      <CloudinaryContext cloudName="nataliesklv">
        <div>PHOTO UPLOAD</div>
        <button onClick={() => beginUpload("bodrug")}>Upload Image</button>
      </CloudinaryContext>
    </div>
  );
}
