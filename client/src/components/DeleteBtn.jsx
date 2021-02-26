import React from "react";
import { Button } from "antd";

export default function DeleteBtn({ setShowDeleteContainer }) {
  return (
    <div>
      <Button className="post-btn" onClick={() => setShowDeleteContainer(true)}>
        DELETE RECORD
      </Button>
    </div>
  );
}
