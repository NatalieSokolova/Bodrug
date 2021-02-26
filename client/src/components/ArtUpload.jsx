import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { openUploadWidget } from "../CloudinaryService";
import { notifyError, notifySuccess } from "../partials";
import { Form, Input, Button } from "antd";
import DeleteBtn from "./DeleteBtn";
import DeleteContainer from "./DeleteContainer";

export default function ArtUpload({
  showDeleteContainer,
  setShowDeleteContainer,
  id,
  setId,
}) {
  toast.configure();

  const [form] = Form.useForm();

  const [art, setArt] = useState({
    url: "",
    description: "",
    year: "",
    materials: "",
    price: "",
  });

  console.log("STATE: ", art);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setArt({
      ...art,
      [name]: value,
    });
  };

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "nataliesklv",
      tags: ["bodrug"],
      uploadPreset: "qtiu4svf",
    };

    openUploadWidget(uploadOptions, (error, artImgs) => {
      if (!error) {
        console.log(artImgs);

        if (artImgs.event === "success") {
          console.log("IMAGE URL: ", artImgs.info.url);

          setArt({
            ...art,
            url: artImgs.info.url,
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

    const newArt = {
      url: art.url,
      description: art.description,
      year: art.year,
      materials: art.materials,
      price: art.price,
    };

    console.log("NEW: ", newArt);

    if (newArt.url) {
      axios
        .post("http://localhost:3001/paintings", newArt)
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
        <DeleteContainer />
      ) : (
        <div>
          <h1>Add a new image below</h1>
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
                  value={art.description}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item label="year" name="year" rules={[{ required: false }]}>
                <Input.TextArea
                  name="year"
                  value={art.year}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item
                label="materials"
                name="materials"
                rules={[{ required: false }]}
              >
                <Input.TextArea
                  name="materials"
                  value={art.materials}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item
                label="price"
                name="price"
                rules={[{ required: false }]}
              >
                <Input.TextArea
                  name="price"
                  value={art.price}
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
                UPLOAD IMAGE
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
