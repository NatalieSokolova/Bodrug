import React, { useState, useEffect } from "react";
import axios from "axios";

const useMessageData = () => {
  const [state, setState] = useState({ messages: [] });

  useEffect(() => {
    axios({
      method: "GET",
      url: "/messages",
    })
      .then((result) =>
        setState((prev) => ({ ...prev, messages: result.data }))
      )
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    setState,
  };
};

export default useMessageData;
