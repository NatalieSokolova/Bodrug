import React from "react";
import ReactDOM, { render } from "react-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// optional cofiguration
const options = {
  position: "top center",
  timeout: 5000,
  offset: "50px",
  transition: "scale",
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AlertProvider>,
  document.getElementById("root")
);
