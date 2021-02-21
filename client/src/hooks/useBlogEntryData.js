import { useState, useEffect } from "react";
import axios from "axios";

const useBlogEntryData = () => {
  const [state, setState] = useState({ blogPosts: [] });

  useEffect(() => {
    axios({
      method: "GET",
      url: "/blogPosts",
    })
      .then((result) =>
        setState((prev) => ({ ...prev, blogPosts: result.data }))
      )
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    setState,
  };
};

export default useBlogEntryData;
