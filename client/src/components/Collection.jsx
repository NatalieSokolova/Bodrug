import React from "react";
import useCollectionData from "../hooks/useCollectionData";

import { toast } from "react-toastify";
import { copyrightError } from "../partials";

export default function Collection() {
  toast.configure();

  const { state } = useCollectionData();
  console.log("STATE: ", state);
  // const collectionList = state.collections.map((collection) => (
  //   <div key={collection.id}>{collection.description}</div>
  // ));

  return (
    <div>
      {state.collections.map((collection) => (
        <div key={collection.id}>{collection.description}</div>
      ))}
    </div>
  );
}
