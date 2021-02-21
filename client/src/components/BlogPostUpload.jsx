import React, { useState } from "react";
import axios from "axios";
import usePhotoData from "../hooks/usePhotoData";
import usePaintingData from "../hooks/usePaintingData";
import { toast } from "react-toastify";
import { notifyError, notifySuccess } from "../partials";
import { Form, Input, Button } from "antd";

export default function BlogPostUpload() {
  toast.configure();
  const photosState = usePhotoData().state.photos;
  const photosArt = usePhotoData().state.paintings;
  const [form] = Form.useForm();
  const imgStyle = {
    opacity: "0.5",
  };

  const [blogPost, setBlogPost] = useState({
    title: "",
    slug: "",
    article: "",
    coverurl: null,
    photoUrls: [],
    dateString: null,
  });

  // const [photos, setPhotos] = useState([]);
  const [image, setImage] = useState("cover");

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setBlogPost({
      ...blogPost,
      [name]: value,
    });
  };

  const selectCover = (url) => {
    return setBlogPost({
      ...blogPost,
      coverurl: url,
    });
  };

  // const setPhotoIds = (id) => {
  //   const photoIds = photos.concat(id);
  //   console.log("collection: ", collection.name);
  //   return setPhotos(photoIds);
  // };

  const createBlogPost = (event) => {
    event.preventDefault();

    const newBlogPost = {
      title: blogPost.title,
      slug: blogPost.slug,
      article: blogPost.article,
      coverurl: blogPost.coverurl,
      // photoUrls: [],
      dateString: blogPost.dateString,
    };

    if (
      newBlogPost.title &&
      newBlogPost.slug &&
      newBlogPost.article &&
      newBlogPost.dateString &&
      newBlogPost.coverurl
    ) {
      axios
        .post("http://localhost:3001/blogPosts", newBlogPost)
        .then((response) => {
          console.log("SUCCESS! ", response);
          notifySuccess("Woo-hoo! Blog post created successfully!");
          setImage("photos");
        })
        .catch((error) => {
          notifyError("OOPS! Something went wrong. Please, try again");
          console.log("TROUBLE! ", error);
        });
    } else {
      notifyError(
        "Please, make sure to fill out title, slug, article and select a cover image"
      );
    }
  };

  // const addPhotos = (event) => {
  //   event.preventDefault();
  //   console.log("COLLECTION: ", collection);

  //   if (photos.length > 0) {
  //     photos.forEach((photoId) => {
  //       axios
  //         .put(
  //           `http://localhost:3001/photos/${photoId}/upd_collection_id`,
  //           collection
  //         )
  //         .then((response) => {
  //           console.log("SUCCESS! ", response);
  //           notifySuccess("Woo-hoo! Photos added to collection successfully!");
  //         })
  //         .catch((error) => {
  //           notifyError("OOPS! Something went wrong. Please, try again");
  //           console.log("TROUBLE! ", error);
  //         });
  //     });
  //   } else {
  //     notifyError("Please, select at least 1 photo");
  //   }
  // };

  return (
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
                <div className="uploadImageContainer">
                  {state.photos.map((photo) => (
                    <div key={photo.id}>
                      <img
                        src={photo.url}
                        alt={photo.description}
                        onClick={() => setPhotoIds(photo.id)}
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
