import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Card } from "antd";
import FaqUpload from "./FaqUpload";
import PhotoUpload from "./PhotoUpload";
import CollectionUpload from "./CollectionUpload";
import StoryUpload from "./StoryUpload";
import ArtUpload from "./ArtUpload";
import BlogPostUpload from "./BlogPostUpload";
import "./AdminDashboard.css";

export default function AdminDashboard({ auth }) {
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState("");
  const [showDeleteContainer, setShowDeleteContainer] = useState(false);

  const adminComponent = (componentId) => {
    switch (componentId) {
      case "photos":
        return (
          <PhotoUpload
            showDeleteContainer={showDeleteContainer}
            setShowDeleteContainer={setShowDeleteContainer}
            id={id}
            setId={setId}
          />
        );
      case "collections":
        return (
          <CollectionUpload
            showDeleteContainer={showDeleteContainer}
            setShowDeleteContainer={setShowDeleteContainer}
            id={id}
            setId={setId}
          />
        );
      case "stories":
        return (
          <StoryUpload
            showDeleteContainer={showDeleteContainer}
            setShowDeleteContainer={setShowDeleteContainer}
            id={id}
            setId={setId}
          />
        );
      case "paintings":
        return (
          <ArtUpload
            showDeleteContainer={showDeleteContainer}
            setShowDeleteContainer={setShowDeleteContainer}
            id={id}
            setId={setId}
          />
        );
      case "faqs":
        return (
          <FaqUpload
            showDeleteContainer={showDeleteContainer}
            setShowDeleteContainer={setShowDeleteContainer}
            id={id}
            setId={setId}
          />
        );
      case "blogPosts":
        return (
          <BlogPostUpload
            showDeleteContainer={showDeleteContainer}
            setShowDeleteContainer={setShowDeleteContainer}
            id={id}
            setId={setId}
          />
        );

      default:
        console.log("OOPS!");
    }
  };

  return (
    <div>
      {/* {!auth.username || !auth.password ? (
        <Redirect to="/login" />
      ) : ( */}
      <div>
        <div className="admin-title">
          <h1>Hey Iuliia!</h1>
          <div>
            Welcome to the admin panel - your place to add gorgeous content
          </div>
          <br />
          <h2>Have a beautiful day!</h2>
        </div>
        <Card className="admin-panel">
          <Card.Grid
            onClick={() => {
              setShowForm(true);
              setId("photos");
              setShowDeleteContainer(false);
            }}
            className="admin-card"
          >
            All Photos
          </Card.Grid>
          <Card.Grid
            onClick={() => {
              setShowForm(true);
              setId("collections");
              setShowDeleteContainer(false);
            }}
            className="admin-card"
          >
            Collections
          </Card.Grid>
          <Card.Grid
            onClick={() => {
              setShowForm(true);
              setId("stories");
              setShowDeleteContainer(false);
            }}
            className="admin-card"
          >
            Stories
          </Card.Grid>
          <Card.Grid
            onClick={() => {
              setShowForm(true);
              setId("paintings");
              setShowDeleteContainer(false);
            }}
            className="admin-card"
          >
            Art
          </Card.Grid>
          <Card.Grid
            onClick={() => {
              setShowForm(true);
              setId("faqs");
              setShowDeleteContainer(false);
            }}
            className="admin-card"
          >
            FAQs
          </Card.Grid>
          <Card.Grid
            onClick={() => {
              setShowForm(true);
              setId("blogPosts");
              setShowDeleteContainer(false);
            }}
            className="admin-card"
          >
            Blog Posts
          </Card.Grid>
        </Card>
        <div className="upload-container">
          {showForm ? adminComponent(id) : null}
        </div>
      </div>
      {/* )} */}
    </div>
  );
}
