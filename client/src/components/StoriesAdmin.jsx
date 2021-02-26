import React, { useState } from "react";
import useStoryData from "../hooks/useStoryData";
import { setRecordIds } from "../helpers";
import { Button } from "antd";

export default function StoriesAdmin() {
  const { state } = useStoryData();
  const [storiesArr, setStoriesArr] = useState([]);

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
        {state.stories.map((story) => (
          <tr key={story.id}>
            <td
              style={{
                fontSize: "1.25em",
                fontFamily: "Playfair Display",
                wordWrap: "break-word",
              }}
            >
              {story.name}
            </td>
            <td>
              <img
                src={story.coverurl}
                alt={story.description}
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
                  setRecordIds(story.id, storiesArr, setStoriesArr)
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
