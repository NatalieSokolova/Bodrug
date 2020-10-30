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

import React from "react";
import Lightbox from "react-lightbox-component";

const Photo = () => (
  <div>
    <Lightbox
      images={[
        {
          src: require("../assets/photos/1-min.jpg"),
          title: "image title",
          description: "image description",
        },
      ]}
    />
  </div>
);

export default Photo;
