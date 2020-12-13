import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";

export default function SelectedBlog(props) {
  console.log("PROPS: ", props);
  return (
    <div>
      <div>ID: {props.blogId}</div>
      THIS IS MY SELECTED BLOG
    </div>
  );
}
