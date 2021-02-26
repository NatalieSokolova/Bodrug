import React from "react";
import { Button } from "antd";

export default function DeleteContainer({ id, setId }) {
  console.log("ID: ", id);
  return (
    <div>
      <div className="upload-form">
        <div>supsupsup</div>
        <Button className="btn btn-primary post-btn">DELETE</Button>
      </div>
    </div>
  );
}
