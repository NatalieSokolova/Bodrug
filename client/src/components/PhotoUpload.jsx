import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import { cloudinary, openUploadWidget } from "cloudinary";
import { CloudinaryContext } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../CloudinaryService";

export default function PhotoUpload() {
  toast.configure();

  const [images, setImages] = useState([]);
  // const uploadWidget = () => {
  //   cloudinary.openUploadWidget(
  //     {
  //       cloud_name: "nataliesklv",
  //       upload_preset: "qtiu4svf",
  //       tags: ["bodrug"],
  //     },
  //     function (error, result) {
  //       console.log(result);
  //     }
  //   );
  // };

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
          setImages([...images, photos.info.public_id]);
        }
      } else {
        console.log(error);
      }
    });
  };

  return (
    <div className="upload-form">
      <CloudinaryContext cloudName="nataliesklv">
        <div>PHOTO UPLOAD</div>
        <button onClick={() => beginUpload()}>Upload Image</button>
      </CloudinaryContext>
    </div>
  );
}
