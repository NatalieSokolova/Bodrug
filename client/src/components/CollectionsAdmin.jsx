import React, { useState } from "react";
import useCollectionData from "../hooks/useCollectionData";
import { setRecordIds } from "../helpers";
import { Button } from "antd";

export default function CollectionsAdmin() {
  const { state } = useCollectionData();
  const [collectionsArr, setCollectionsArr] = useState([]);

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
        {state.collections.map((collection) => (
          <tr key={collection.id}>
            <td
              style={{
                fontSize: "1.25em",
                fontFamily: "Playfair Display",
                wordWrap: "break-word",
              }}
            >
              {collection.name}
            </td>
            <td>
              <img
                src={collection.coverurl}
                alt={collection.description}
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
                  setRecordIds(collection.id, collectionsArr, setCollectionsArr)
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
