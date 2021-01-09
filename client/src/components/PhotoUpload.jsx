import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import { cloudinary, openUploadWidget } from "cloudinary";
import { CloudinaryContext } from "cloudinary-react";

export default function PhotoUpload() {
  toast.configure();

  const uploadWidget = () => {
    cloudinary.openUploadWidget(
      {
        cloud_name: "nataliesklv",
        upload_preset: "qtiu4svf",
        tags: ["bodrug"],
      },
      function (error, result) {
        console.log(result);
      }
    );
  };

  return (
    <div>
      <CloudinaryContext cloudName="nataliesklv">
        <div>PHOTO UPLOAD</div>
        <button onClick={openUploadWidget} className="upload-button">
          Upload Image
        </button>
      </CloudinaryContext>
    </div>
  );
}
