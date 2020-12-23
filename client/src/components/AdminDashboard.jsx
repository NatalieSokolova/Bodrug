import React from "react";
import { Card } from "antd";

export default function AdminDashboard() {
  const gridStyle = {
    width: "30%",
    textAlign: "center",
  };

  return (
    <div>
      <Card title="Card Title">
        <Card.Grid>Content</Card.Grid>
        <Card.Grid>Content</Card.Grid>
        <Card.Grid>Content</Card.Grid>
        <Card.Grid>Content</Card.Grid>
        <Card.Grid>Content</Card.Grid>
        <Card.Grid>Content</Card.Grid>
      </Card>
    </div>
  );
}
