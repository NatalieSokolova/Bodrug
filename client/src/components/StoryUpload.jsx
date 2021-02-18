import React, { useState } from "react";
import axios from "axios";
import usePhotoData from "../hooks/usePhotoData";
import { toast } from "react-toastify";
import { notifyError, notifySuccess } from "../partials";
import { Form, Input, Button } from "antd";

export default function StoryUpload() {
  toast.configure();
  const { state } = usePhotoData();
  const [form] = Form.useForm();

  const [story, setStory] = useState({
    name: "",
    description: "",
    coverurl: null,
  });

  const [photos, setPhotos] = useState([]);
  const [image, setImage] = useState("cover");

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setStory({
      ...story,
      [name]: value,
    });
  };

  const selectCover = (url) => {
    return setStory({
      ...story,
      coverurl: url,
    });
  };

  const setPhotoIds = (id) => {
    const photoIds = photos.concat(id);
    // console.log("story: ", story.name);
    return setPhotos(photoIds);
  };

  // console.log("PHOTO IDs: ", photos);

  const createstory = (event) => {
    event.preventDefault();

    const newStory = {
      name: story.name,
      description: story.description,
      coverurl: story.coverurl,
    };

    if (newStory.name && newStory.description && newStory.coverurl) {
      axios
        .post("http://localhost:3001/stories", newStory)
        .then((response) => {
          console.log("SUCCESS! ", response);
          notifySuccess("Woo-hoo! Story created successfully!");
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
    console.log("story: ", story);

    if (photos.length > 0) {
      photos.forEach((photoId) => {
        console.log("photoId: ", photoId);
        axios
          .put(`http://localhost:3001/photos/upd_story_id`, {
            story,
            photoId,
          })
          .then((response) => {
            console.log("SUCCESS! ", response);
            notifySuccess("Woo-hoo! Photos added to story successfully!");
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
      <h1>Add a new story below</h1>
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
                    message: "Please input the story name!",
                  },
                ]}
              >
                <Input name="name" value={story.name} onChange={handleChange} />
              </Form.Item>
              <Form.Item
                label="description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please input the story description!",
                  },
                ]}
              >
                <Input.TextArea
                  name="description"
                  value={story.description}
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item label="cover photo">
                <div>
                  {state.photos.map((photo) => (
                    <div key={photo.id} className="photoContainer">
                      <img
                        src={photo.url}
                        alt={photo.description}
                        onClick={() => {
                          selectCover(photo.url);
                        }}
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
              <Button
                className="btn btn-primary post-btn"
                onClick={createstory}
              >
                CREATE STORY
              </Button>
            </Form.Item>
          </div>
        ) : (
          <div>
            <div className="formInput">
              <Form.Item label="photos">
                <div>
                  {state.photos.map((photo) => (
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
              <Button className="btn btn-primary post-btn" onClick={addPhotos}>
                ADD PHOTOS
              </Button>
            </Form.Item>
          </div>
        )}
      </Form>
    </div>
  );
}
