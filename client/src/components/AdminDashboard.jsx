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
  const [id, setId] = useState(null);

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
              setId("allPhotos");
            }}
            className="admin-card"
          >
            All Photos
          </Card.Grid>
          <Card.Grid
            onClick={() => {
              setShowForm(true);
              setId("collections");
            }}
            className="admin-card"
          >
            Collections
          </Card.Grid>
          <Card.Grid
            onClick={() => {
              setShowForm(true);
              setId("stories");
            }}
            className="admin-card"
          >
            Stories
          </Card.Grid>
          <Card.Grid
            onClick={() => {
              setShowForm(true);
              setId("art");
            }}
            className="admin-card"
          >
            Art
          </Card.Grid>
          <Card.Grid
            onClick={() => {
              setShowForm(true);
              setId("faq");
            }}
            className="admin-card"
          >
            FAQs
          </Card.Grid>
          <Card.Grid
            onClick={() => {
              setShowForm(true);
              setId("blog");
            }}
            className="admin-card"
          >
            Blog
          </Card.Grid>
        </Card>

        {showForm && id === "faq" ? (
          <div className="upload-container">
            <FaqUpload />
          </div>
        ) : null}
        {showForm && id === "allPhotos" ? (
          <div className="upload-container">
            <PhotoUpload />
          </div>
        ) : null}
        {showForm && id === "collections" ? (
          <div className="upload-container">
            <CollectionUpload />
          </div>
        ) : null}
        {showForm && id === "stories" ? (
          <div className="upload-container">
            <StoryUpload />
          </div>
        ) : null}
        {showForm && id === "art" ? (
          <div className="upload-container">
            <ArtUpload />
          </div>
        ) : null}
        {showForm && id === "blog" ? (
          <div className="upload-container">
            <BlogPostUpload />
          </div>
        ) : null}
      </div>
      {/* )} */}
    </div>
  );
}
