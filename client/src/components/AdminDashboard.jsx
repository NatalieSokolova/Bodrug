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

        {showForm && id === "faqs" ? (
          <div className="upload-container">
            <FaqUpload
              showDeleteContainer={showDeleteContainer}
              setShowDeleteContainer={setShowDeleteContainer}
              id={id}
              setId={setId}
            />
          </div>
        ) : null}
        {showForm && id === "photos" ? (
          <div className="upload-container">
            <PhotoUpload
              showDeleteContainer={showDeleteContainer}
              setShowDeleteContainer={setShowDeleteContainer}
              id={id}
              setId={setId}
            />
          </div>
        ) : null}
        {showForm && id === "collections" ? (
          <div className="upload-container">
            <CollectionUpload
              showDeleteContainer={showDeleteContainer}
              setShowDeleteContainer={setShowDeleteContainer}
              id={id}
              setId={setId}
            />
          </div>
        ) : null}
        {showForm && id === "stories" ? (
          <div className="upload-container">
            <StoryUpload
              showDeleteContainer={showDeleteContainer}
              setShowDeleteContainer={setShowDeleteContainer}
              id={id}
              setId={setId}
            />
          </div>
        ) : null}
        {showForm && id === "paintings" ? (
          <div className="upload-container">
            <ArtUpload
              showDeleteContainer={showDeleteContainer}
              setShowDeleteContainer={setShowDeleteContainer}
              id={id}
              setId={setId}
            />
          </div>
        ) : null}
        {showForm && id === "blogPosts" ? (
          <div className="upload-container">
            <BlogPostUpload
              showDeleteContainer={showDeleteContainer}
              setShowDeleteContainer={setShowDeleteContainer}
              id={id}
              setId={setId}
            />
          </div>
        ) : null}
      </div>
      {/* )} */}
    </div>
  );
}
