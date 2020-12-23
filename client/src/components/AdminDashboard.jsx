import React from "react";
import { Card } from "antd";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  // const gridStyle = {
  //   width: "30%",
  //   textAlign: "center",
  // };

  return (
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
        <Card.Grid className="admin-card">All Photos</Card.Grid>
        <Card.Grid className="admin-card">Collections</Card.Grid>
        <Card.Grid className="admin-card">Stories</Card.Grid>
        <Card.Grid className="admin-card">Art</Card.Grid>
        <Card.Grid className="admin-card">FAQs</Card.Grid>
        <Card.Grid className="admin-card">Blog</Card.Grid>
      </Card>
    </div>
  );
}
