import React, { useState } from "react";
import { Button } from "antd";
import DeleteContainer from "./DeleteContainer";

export default function DeleteBtn() {
  const [showDeleteContainer, setShowDeleteContainer] = useState(false);
  return (
    <div>
      <Button className="post-btn">DELETE RECORD</Button>
      <DeleteContainer />
    </div>
  );
}
