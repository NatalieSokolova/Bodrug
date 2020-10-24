import React, { useState, useEffect } from "react";
import axios from "axios";

const useArtData = () => {
  const [state, setState] = useState({ arts: [] });

  useEffect(() => {
    axios({
      method: "GET",
      url: "/art",
    })
      .then((result) => setState((prev) => ({ ...prev, arts: result.data })))
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    setState,
  };
};

export default useArtData;
