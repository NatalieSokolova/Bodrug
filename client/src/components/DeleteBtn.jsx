import React, { useState } from "react";
import { Button } from "antd";
import DeleteContainer from "./DeleteContainer";

export default function DeleteBtn({
  showDeleteContainer,
  setShowDeleteContainer,
}) {
  console.log("STATE: ", showDeleteContainer);
  return (
    <div>
      <Button className="post-btn" onClick={() => setShowDeleteContainer(true)}>
        DELETE RECORD
      </Button>
      {showDeleteContainer ? <DeleteContainer /> : null}
    </div>
  );
}
