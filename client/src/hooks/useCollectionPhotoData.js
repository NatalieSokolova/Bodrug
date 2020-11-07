import { useState, useEffect } from "react";
import axios from "axios";

const useCollectionPhotoData = () => {
  const [state, setState] = useState({ collectionPhotos: [] });
  // const id = req.params.id;

  useEffect(() => {
    axios({
      method: "GET",
      url: "/collections/1/photos",
    })
      .then((result) => {
        console.log("RES: ", result);
        setState((prev) => ({ ...prev, collectionPhotos: result.data }));
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    setState,
  };
};

export default useCollectionPhotoData;
