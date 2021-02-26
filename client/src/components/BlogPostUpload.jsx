import React, { useState } from "react";
import axios from "axios";
import usePhotoData from "../hooks/usePhotoData";
import usePaintingData from "../hooks/usePaintingData";
import { toast } from "react-toastify";
import { notifyError, notifySuccess } from "../helpers";
import { Form, Input, Button } from "antd";
import DeleteBtn from "./DeleteBtn";
import DeleteContainer from "./DeleteContainer";

export default function BlogPostUpload({
  showDeleteContainer,
  setShowDeleteContainer,
  id,
  setId,
}) {
  toast.configure();
  const photosState = usePhotoData().state.photos;
  const artState = usePaintingData().state.paintings;
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

  const [pictures, setPictures] = useState([]);
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

  const setPictureUrls = (url) => {
    const pictureUrls = pictures.concat(url);
    return setPictures(pictureUrls);
  };

  const getCurrentDate = () => {
    let currentMonth = new Array();
    currentMonth[0] = "January";
    currentMonth[1] = "February";
    currentMonth[2] = "March";
    currentMonth[3] = "April";
    currentMonth[4] = "May";
    currentMonth[5] = "June";
    currentMonth[6] = "July";
    currentMonth[7] = "August";
    currentMonth[8] = "September";
    currentMonth[9] = "October";
    currentMonth[10] = "November";
    currentMonth[11] = "December";
    let newDate = new Date();
    let date = newDate.getDate();
    let month = currentMonth[newDate.getMonth()];
    let year = newDate.getFullYear();

    return `${month} ${date}, ${year}`;
  };

  const createBlogPost = (event) => {
    event.preventDefault();

    const newBlogPost = {
      title: blogPost.title,
      slug: blogPost.slug,
      article: blogPost.article,
      coverurl: blogPost.coverurl,
      // photoUrls: [],
      dateString: getCurrentDate(),
    };

    if (
      newBlogPost.title &&
      newBlogPost.slug &&
      newBlogPost.article &&
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

    console.log("newBlogPost: ", newBlogPost);
  };

  const addPictures = (event) => {
    event.preventDefault();
    console.log("blogPost: ", blogPost);

    if (pictures.length > 0) {
      // pictures.forEach((pictureId) => {
      axios
        .put(`http://localhost:3001/blogPosts/${blogPost.title}`, pictures)
        .then((response) => {
          console.log("SUCCESS! ", response);
          notifySuccess(
            `Woo-hoo! Photos added to blog post: ${blogPost.title} successfully!`
          );
        })
        .catch((error) => {
          notifyError("OOPS! Something went wrong. Please, try again");
          console.log("TROUBLE! ", error);
        });
      // });
    } else {
      notifyError("Please, select at least 1 photo");
    }
  };

  console.log("pictures: ", pictures);

  return (
    <div>
      {showDeleteContainer ? (
        <DeleteContainer id={id} setId={setId} />
      ) : (
        <div>
          <h1>Add a new blog post below</h1>
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
                    label="title"
                    name="title"
                    rules={[
                      {
                        required: true,
                        message: "Please input the blog post title!",
                      },
                    ]}
                  >
                    <Input
                      name="title"
                      value={blogPost.title}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item
                    label="slug"
                    name="slug"
                    rules={[
                      {
                        required: true,
                        message: "Please input the blog post slug!",
                      },
                    ]}
                  >
                    <Input
                      name="slug"
                      value={blogPost.slug}
                      onChange={handleChange}
                    />
                  </Form.Item>

                  <Form.Item
                    label="article"
                    name="article"
                    rules={[
                      {
                        required: true,
                        message: "Please input the blog post article!",
                      },
                    ]}
                  >
                    <Input.TextArea
                      name="article"
                      value={blogPost.article}
                      onChange={handleChange}
                    />
                  </Form.Item>

                  <Form.Item label="cover image">
                    <div className="uploadImageContainer">
                      {photosState.map((photo) => (
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
                      {artState.map((art) => (
                        <div key={art.id}>
                          <img
                            src={art.url}
                            alt={art.description}
                            onClick={() => {
                              selectCover(art.url);
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
                    onClick={createBlogPost}
                  >
                    CREATE BLOG POST
                  </Button>
                </Form.Item>
              </div>
            ) : (
              <div>
                <div className="formInput">
                  <Form.Item label="photos">
                    <div className="uploadImageContainer">
                      {photosState.map((photo) => (
                        <div key={photo.id}>
                          <img
                            src={photo.url}
                            alt={photo.description}
                            onClick={() => {
                              setPictureUrls(photo.url);
                            }}
                            className="uploadImage"
                          />
                        </div>
                      ))}
                      {artState.map((art) => (
                        <div key={art.id}>
                          <img
                            src={art.url}
                            alt={art.description}
                            onClick={() => {
                              setPictureUrls(art.url);
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
                    onClick={addPictures}
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
