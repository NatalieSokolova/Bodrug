import React, { useState } from "react";
import axios from "axios";
import usePhotoData from "../hooks/usePhotoData";
import { toast } from "react-toastify";
import { notifyError, notifySuccess } from "../partials";
import { Form, Input, Button } from "antd";

export default function CollectionUpload() {
  toast.configure();
  const { state } = usePhotoData();
  const [form] = Form.useForm();

  const [collection, setCollection] = useState({
    name: "",
    description: "",
    coverurl: null,
  });

  // setPhotos ???
  const [photos, setPhotos] = useState([]);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setCollection({
      ...collection,
      [name]: value,
    });
  };

  const setCover = (url) => {
    return setCollection({
      ...collection,
      coverurl: url,
    });
  };

  const setPhotoIds = (id) => {
    const photoIds = photos.concat(id);
    return setPhotos(photoIds);
  };

  console.log("PHOTO IDs: ", photos);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCollection = {
      name: collection.name,
      description: collection.description,
      coverurl: collection.coverurl,
    };

    // console.log("NEW: ", newCollection);

    if (
      newCollection.name &&
      newCollection.description &&
      newCollection.coverurl
    ) {
      console.log("newCollection: ", newCollection);

      axios
        .post("http://localhost:3001/collections", newCollection)
        .then((response) => {
          console.log("SUCCESS! ", response);
          notifySuccess("Woo-hoo! Collection created successfully!");
        })
        .catch((error) => {
          notifyError("OOPS! Something went wrong. Please, try again");
          console.log("TROUBLE! ", error);
        });
    } else {
      notifyError(
        "Please, make sure to fill out name, description and select a cover photo"
      );
    }
  };

  // console.log("collection: ", collection);

  return (
    <div className="upload-container">
      <h1>Add a new collection below</h1>
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
          <Form.Item label="name" name="name" rules={[{ required: false }]}>
            <Input
              name="name"
              value={collection.name}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            label="description"
            name="description"
            rules={[{ required: false }]}
          >
            <Input.TextArea
              name="description"
              value={collection.description}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="cover photo">
            <div>
              {state.photos.reverse().map((photo) => (
                <div key={photo.id} className="photoContainer">
                  <img
                    src={photo.url}
                    alt={photo.description}
                    onClick={() => setCover(photo.url)}
                    className="photo"
                  />
                </div>
              ))}
            </div>
          </Form.Item>
          <Form.Item label="photos">
            <div>
              {state.photos.reverse().map((photo) => (
                <div key={photo.id} className="photoContainer">
                  <img
                    src={photo.url}
                    alt={photo.description}
                    onClick={() => setPhotoIds(photo.id)}
                    className="photo"
                  />
                </div>
              ))}
            </div>
          </Form.Item>
        </div>

        <Form.Item
          style={{
            marginBottom: "0",
          }}
        >
          <Button className="btn btn-primary post-btn" onClick={handleSubmit}>
            POST
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
