import React, { useState, useEffect } from "react";
import axios from "axios";

const usePaintingData = () => {
  const [state, setState] = useState({ paintings: [] });

  useEffect(() => {
    axios({
      method: "GET",
      url: "/paintings",
    })
      .then((result) =>
        setState((prev) => ({ ...prev, paintings: result.data }))
      )
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    setState,
  };
};

export default usePaintingData;
