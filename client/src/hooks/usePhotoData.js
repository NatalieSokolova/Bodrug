import { useState, useEffect } from "react";
import axios from "axios";

const usePhotoData = () => {
  const [state, setState] = useState({ photos: [] });

  useEffect(() => {
    axios({
      method: "GET",
      url: "/photos",
    })
      .then((result) => setState((prev) => ({ ...prev, photos: result.data })))
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    setState,
  };
};

export default usePhotoData;
