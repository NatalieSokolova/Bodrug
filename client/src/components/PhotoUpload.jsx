import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { openUploadWidget } from "../CloudinaryService";
import { notifyError, notifySuccess } from "../partials";
import { Form, Input, Button } from "antd";
import DeleteBtn from "./DeleteBtn";
import DeleteContainer from "./DeleteContainer";

export default function PhotoUpload({
  showDeleteContainer,
  setShowDeleteContainer,
  id,
  setId,
}) {
  toast.configure();

  const [form] = Form.useForm();

  const [photo, setPhoto] = useState({
    url: "",
    description: "",
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

        // const newPhoto = {
        //   url: photos.info.url,
        // };

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
      notifyError("You can't submit an empty form. Please, try again");
    }
  };

  return (
    <div>
      {showDeleteContainer ? (
        <DeleteContainer id={id} setId={setId} />
      ) : (
        <div>
          <h1>Add a new photo below</h1>
          <Form
            form={form}
            className="upload-form"
            name="basic"
            initialValues={{ remember: true }}
          >
            <div className="formInput">
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
              <Button
                className="btn btn-primary post-btn"
                onClick={handleSubmit}
              >
                POST
              </Button>
            </Form.Item>
          </Form>
          <DeleteBtn
            showDeleteContainer={showDeleteContainer}
            setShowDeleteContainer={setShowDeleteContainer}
          />
        </div>
      )}
    </div>
  );
}
