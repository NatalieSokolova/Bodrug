import React, { useState } from "react";
import axios from "axios";
import usePhotoData from "../hooks/usePhotoData";
import { toast } from "react-toastify";
import { notifyError, notifySuccess } from "../partials";
import { Form, Input, Button } from "antd";

export default function CollectionUpload() {
  toast.configure();
  const { state } = usePhotoData();
  const [form] = Form.useForm();

  return (
    <div className="upload-container">
      <h1>Add a new collection below</h1>
      <Form
        form={form}
        className="upload-form"
        name="basic"
        initialValues={{ remember: true }}
      >
        <div
          style={{
            padding: "5vh 2vw",
            marginBottom: "-7.5vh",
          }}
        >
          <Form.Item label="name" name="name" rules={[{ required: false }]}>
            <Input
              name="name"
              // value={photo.description}
              // onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            label="description"
            name="description"
            rules={[{ required: false }]}
          >
            <Input.TextArea
              name="description"
              // value={photo.description}
              // onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="cover photo">
            <div>
              {state.photos.reverse().map((photo) => (
                <div key={photo.id} className="photoContainer">
                  <img
                    src={photo.url}
                    alt={photo.description}
                    className="photo"
                  />
                </div>
              ))}
            </div>
          </Form.Item>
          <Form.Item label="photos">
            <div>
              {state.photos.reverse().map((photo) => (
                <div key={photo.id} className="photoContainer">
                  <img
                    src={photo.url}
                    alt={photo.description}
                    className="photo"
                  />
                </div>
              ))}
            </div>
          </Form.Item>
        </div>

        <Form.Item
          style={{
            marginBottom: "0",
          }}
        >
          <Button className="btn btn-primary post-btn">POST</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
