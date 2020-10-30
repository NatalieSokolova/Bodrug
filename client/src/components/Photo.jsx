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
// <Card className="photo-description-card">
//   <div>{photo.description}</div>
// </Card>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import usePhotoData from "../hooks/usePhotoData";
import { SRLWrapper } from "simple-react-lightbox";
// import { Card } from "antd";
import "./Photo.css";

export default function Portfolio() {
  const { state, setState } = usePhotoData();

  return (
    <div className="outsideContainer">
      <SRLWrapper>
        {!state.photos ? (
          <span>Loading...</span>
        ) : (
          <div className="row">
            {state.photos.map((photo) => (
              <div key={photo.id} className="photoContainer">
                <img
                  src={require(`../assets/photos${photo.url}`)}
                  alt={photo.description}
                  className="photo"
                />
                {/* <Card className="photo-description-card">
                  <div>{photo.description}</div>
                </Card> */}
              </div>
            ))}
          </div>
        )}
      </SRLWrapper>
    </div>
  );
}
