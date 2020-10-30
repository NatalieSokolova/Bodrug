// import React, { useState, useEffect } from "react";
// import usePhotoData from "../hooks/usePhotoData";
// import { Card } from "antd";
// import "./Photo.css";

// export default function Portfolio() {
//   const { state, setState } = usePhotoData();
//   return (
//     <div className="outsideContainer">
//       {state.photos.map((photo) => (
//         <div key={photo.id} className="photoContainer">
//           <img
//             className="photo"
//             src={require(`../assets/photos${photo.url}`)}
//             alt="Photo By Yuliia Bodrug"
//           />
//           <Card className="photo-description-card">
//             <div>{photo.description}</div>
//           </Card>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import usePhotoData from "../hooks/usePhotoData";
import { Card } from "antd";
import "./Photo.css";
import Lightbox from "react-lightbox-component";

const Photo = () => {
  const images = [
    {
      src: require("../assets/photos/1-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/2-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/3-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/4-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/5-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/6-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/7-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/8-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/9-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/10-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/11-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/12-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/13-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/14-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/15-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/16-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/17-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/18-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/19-min.jpg"),
      title: "image title",
      description: "image description",
    },
    {
      src: require("../assets/photos/20-min.jpg"),
      title: "image title",
      description: "image description",
    },
  ];

  return (
    <div>
      <Lightbox images={images} />
    </div>
  );
};

export default Photo;
