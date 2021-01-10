import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { fetchPhotos, openUploadWidget } from "../CloudinaryService";
import { notifyError, notifySuccess } from "../partials";
import { Form, Input, Button } from "antd";

export default function PhotoUpload() {
  toast.configure();

  const [form] = Form.useForm();

  const [photo, setPhoto] = useState({
    url: "",
    description: "",
    collection_id: 0,
    story_id: 0,
  });

  console.log("STATE: ", photo);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setPhoto({
      ...photo,
      [name]: value,
    });

    console.log("NAME: ", name);
    console.log(target);
  };

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

          setPhoto({
            ...photo,
            url: photos.info.url,
          });

          // also needs a delete request when img is deselected!!!
          // axios
          //   .post("http://localhost:3001/photos", newPhoto)
          //   .then((response) => {
          //     console.log("SUCCESS! ", response);
          //     notifySuccess("Woo-hoo! Image posted successfully!");
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPhoto = {
      url: photo.url,
      description: photo.description,
      collection_id: photo.collection_id,
      story_id: photo.story_id,
    };

    console.log("NEW: ", newPhoto);

    if (newPhoto.url) {
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
    } else {
      notifyError("You can't submit an empty FAQ. Please, try again");
    }
  };

  return (
    <div className="upload-container">
      <Button
        className="btn btn-primary upload-btn"
        onClick={() => beginUpload("bodrug")}
      >
        UPLOAD PHOTO
      </Button>
    </div>
  );
}
