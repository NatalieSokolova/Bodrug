import React, { useState } from "react";
import axios from "axios";
import usePhotoData from "../hooks/usePhotoData";
import { toast } from "react-toastify";
import { notifyError, notifySuccess, setRecordIds } from "../helpers";
import { Form, Input, Button } from "antd";
import DeleteBtn from "./DeleteBtn";
import DeleteContainer from "./DeleteContainer";
import PhotosAdmin from "./PhotosAdmin";

export default function CollectionUpload({
  showDeleteContainer,
  setShowDeleteContainer,
  id,
  setId,
}) {
  toast.configure();
  const { state } = usePhotoData();
  const [form] = Form.useForm();
  const imgStyle = {
    opacity: "0.5",
  };

  const [photos, setPhotos] = useState([]);

  const [collection, setCollection] = useState({
    name: "",
    description: "",
    coverurl: null,
  });

  const [image, setImage] = useState("cover");

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setCollection({
      ...collection,
      [name]: value,
    });
  };

  const selectCover = (url) => {
    return setCollection({
      ...collection,
      coverurl: url,
    });
  };

  const createCollection = (event) => {
    event.preventDefault();

    const newCollection = {
      name: collection.name,
      description: collection.description,
      coverurl: collection.coverurl,
    };

    if (
      newCollection.name &&
      newCollection.description &&
      newCollection.coverurl
    ) {
      axios
        .post("http://localhost:3001/collections", newCollection)
        .then((response) => {
          console.log("SUCCESS! ", response);
          notifySuccess("Woo-hoo! Collection created successfully!");
          setImage("photos");
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

  const addPhotos = (event) => {
    event.preventDefault();
    console.log("COLLECTION: ", collection);

    if (photos.length > 0) {
      photos.forEach((photoId) => {
        axios
          .put(
            `http://localhost:3001/photos/${photoId}/upd_collection_id`,
            collection
          )
          .then((response) => {
            console.log("SUCCESS! ", response);
            notifySuccess("Woo-hoo! Photos added to collection successfully!");
          })
          .catch((error) => {
            notifyError("OOPS! Something went wrong. Please, try again");
            console.log("TROUBLE! ", error);
          });
      });
    } else {
      notifyError("Please, select at least 1 photo");
    }
  };

  return (
    <div>
      {showDeleteContainer ? (
        <DeleteContainer id={id} setId={setId} />
      ) : (
        <div>
          <h1>Add a new collection below</h1>
          <Form
            form={form}
            className="upload-form"
            name="basic"
            initialValues={{ remember: true }}
          >
            {image === "cover" ? (
              <div>
                <div className="formInput">
                  <Form.Item
                    label="name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input the collection name!",
                      },
                    ]}
                  >
                    <Input
                      name="name"
                      value={collection.name}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item
                    label="description"
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: "Please input the collection description!",
                      },
                    ]}
                  >
                    <Input.TextArea
                      name="description"
                      value={collection.description}
                      onChange={handleChange}
                    />
                  </Form.Item>

                  <Form.Item label="cover photo">
                    <div className="uploadImageContainer">
                      {state.photos.map((photo) => (
                        <div key={photo.id}>
                          <img
                            src={photo.url}
                            alt={photo.description}
                            onClick={() => {
                              selectCover(photo.url);
                            }}
                            className="uploadImage"
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
                  <Button
                    className="btn btn-primary post-btn"
                    onClick={createCollection}
                  >
                    CREATE COLLECTION
                  </Button>
                </Form.Item>
              </div>
            ) : (
              <div>
                <div className="formInput">
                  <Form.Item label="photos">
                    <PhotosAdmin photos={photos} setPhotos={setPhotos} />
                  </Form.Item>
                </div>

                <Form.Item
                  style={{
                    marginBottom: "0",
                  }}
                >
                  <Button
                    className="btn btn-primary post-btn"
                    onClick={addPhotos}
                  >
                    ADD PHOTOS
                  </Button>
                </Form.Item>
              </div>
            )}
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
