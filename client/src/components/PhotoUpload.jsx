import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { CloudinaryContext } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../CloudinaryService";
import { notifyError, notifySuccess } from "../partials";

export default function PhotoUpload() {
  toast.configure();

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "nataliesklv",
      tags: ["bodrug"],
      uploadPreset: "qtiu4svf",
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);

        const newPhoto = {
          url: photos.info.url,
        };

        if (photos.event === "success") {
          console.log("IMAGE URL: ", photos.info.url);

          // also needs a delete request when img is deselected!!!
          axios
            .post("http://localhost:3001/photos", newPhoto)
            .then((response) => {
              console.log("SUCCESS! ", response);
              notifySuccess("Woo-hoo! Image posted successfully!");
            })
            .catch((error) => {
              notifyError("OOPS! Something went wrong. Please, try again");
              console.log("TROUBLE! ", error);
            });
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
