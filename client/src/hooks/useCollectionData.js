import React, { useState, useEffect } from "react";
import axios from "axios";

const useCollectionData = () => {
  const [state, setState] = useState({ collections: [] });

  useEffect(() => {
    axios({
      method: "GET",
      url: "/collections",
    })
      .then((result) =>
        setState((prev) => ({ ...prev, collections: result.data }))
      )
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    setState,
  };
};

export default useCollectionData;
