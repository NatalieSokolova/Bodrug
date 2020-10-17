import React, { useState, useEffect } from "react";
import axios from "axios";

const useFaqData = () => {
  const [state, setState] = useState({ faqs: [] });

  useEffect(() => {
    axios({
      method: "GET",
      url: "/faqs",
    })
      .then((result) => setState((prev) => ({ ...prev, faqs: result.data })))
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    setState,
  };
};

export default useFaqData;
