import React, { useState } from "react";
import useBlogEntryData from "../hooks/useBlogEntryData";
import { setRecordIds } from "../helpers";
import { Button } from "antd";

export default function BlogAdmin() {
  const { state } = useBlogEntryData();
  const [blogPostsArr, setBlogPostsArr] = useState([]);

  return (
    <table>
      <thead>
        <tr
          style={{
            height: "50px",
          }}
        >
          <th>NAME</th>
          <th>COVER</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {state.blogPosts.map((post) => (
          <tr key={post.id}>
            <td
              style={{
                fontSize: "1.25em",
                fontFamily: "Playfair Display",
                wordWrap: "break-word",
              }}
            >
              {post.title}
            </td>
            <td>
              <img
                src={post.coverurl}
                alt={post.title}
                className="tableImage"
              />
            </td>
            <td
              style={{
                textAlign: "center",
              }}
            >
              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                }}
                onClick={() =>
                  setRecordIds(post.id, blogPostsArr, setBlogPostsArr)
                }
              >
                select
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
