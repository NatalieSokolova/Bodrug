import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { openUploadWidget } from "../CloudinaryService";
import { notifyError, notifySuccess } from "../partials";
import { Form, Input, Button } from "antd";

export default function PhotoUpload() {
  toast.configure();

  const [form] = Form.useForm();

  const [photo, setPhoto] = useState({
    url: "",
    description: "",
    collection_id: null,
    story_id: null,
  });

  console.log("STATE: ", photo);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    // const value = target.value;
    let value;

    target.name === "collection_id" || target.name === "story_id"
      ? (value = Number(target.value))
      : (value = target.value);

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
      <h1>Add a new photo below</h1>
      <Form
        form={form}
        className="upload-form"
        name="basic"
        initialValues={{ remember: true }}
      >
        <div
          style={{
            padding: "5vh 2vw",
            marginBottom: "-7.5vh",
          }}
        >
          <Form.Item
            label="description"
            name="description"
            rules={[{ required: false }]}
          >
            <Input.TextArea
              name="description"
              value={photo.description}
              onChange={handleChange}
            />
          </Form.Item>

          {/* <Form.Item
            label="collection_id"
            name="collection_id"
            rules={[{ required: false }]}
          >
            <Input
              name="collection_id"
              value={photo.collection_id}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            label="story_id"
            name="story_id"
            rules={[{ required: false }]}
          >
            <Input
              name="story_id"
              value={photo.story_id}
              onChange={handleChange}
            />
          </Form.Item> */}
        </div>

        <Form.Item
          style={{
            marginBottom: "0",
          }}
        >
          <Button
            className="btn btn-primary upload-btn"
            onClick={() => beginUpload("bodrug")}
          >
            UPLOAD PHOTO
          </Button>
          <Button className="btn btn-primary post-btn" onClick={handleSubmit}>
            POST
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
