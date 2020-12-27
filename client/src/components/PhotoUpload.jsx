import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { notifyError, notifySuccess } from "../partials";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function PhotoUpload() {
  toast.configure();

  const props = {
    action: "//jsonplaceholder.typicode.com/posts/",
    listType: "picture",
    previewFile(file) {
      console.log("Your upload file:", file);
      // Your process logic. Here we just mock to the same file
      return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
        method: "POST",
        body: file,
      })
        .then((res) => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
  };

  return (
    <div>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    </div>
  );
}
