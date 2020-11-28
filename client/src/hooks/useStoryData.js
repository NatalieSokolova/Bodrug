import { useState, useEffect } from "react";
import axios from "axios";

const useStoryData = () => {
  const [state, setState] = useState({ stories: [] });

  useEffect(() => {
    axios({
      method: "GET",
      url: "/stories",
    })
      .then((result) => setState((prev) => ({ ...prev, stories: result.data })))
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    setState,
  };
};

export default useStoryData;
