import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { CloudinaryContext } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../CloudinaryService";
import { notifyError, notifySuccess } from "../partials";

export default function PhotoUpload() {
  toast.configure();

  // const [images, setImages] = useState([]);

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
          console.log("IMAGE UPLOADED: ", photos.info.url);

          notifySuccess("Woo-hoo! Image posted successfully!");
          // setImages([...images, photos.info.public_id]);
          // axios
          //   .post("http://localhost:3001/photos", {
          //     url: `https://res.cloudinary.com/nataliesklv/image/upload/v1610232496/${}.jpg`
          //   })
          //   .then((response) => {
          //     notifySuccess("Woo-hoo! FAQ posted successfully!");
          //   })
          //   .catch((error) => {
          //     notifyError("OOPS! Something went wrong. Please, try again");
          //     console.log("TROUBLE! ", error);
          //   });
        }
      } else {
        notifyError("OOPS! Something went wrong. Please, try again");
        console.log("ERROR: ", error);
      }
    });
  };

  // useEffect(() => {
  //   fetchPhotos("bodrug", setImages);
  // }, []);

  return (
    <div className="upload-form">
      {/* {console.log("IMAGES: ", images)} */}
      <CloudinaryContext cloudName="nataliesklv">
        <div>PHOTO UPLOAD</div>
        <button onClick={() => beginUpload("bodrug")}>Upload Image</button>
      </CloudinaryContext>
    </div>
  );
}

// ["aqyngsip5usfqngidh2y"]
// ["fdzdku3mc2a1tvftscfj"]
// v1610232496
// v1610232496
