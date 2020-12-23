import { useState, useEffect } from "react";
import axios from "axios";

const useBlogData = () => {
  const [state, setState] = useState({ blogEntries: [] });

  useEffect(() => {
    axios({
      method: "GET",
      url: "/blogEntries",
    })
      .then((result) =>
        setState((prev) => ({ ...prev, blogEntries: result.data }))
      )
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    setState,
  };
};

export default useBlogData;
