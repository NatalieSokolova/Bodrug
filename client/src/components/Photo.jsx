// import React from "react";
// import "./Photo.css";

// export default function Photo() {
//   return (
//     <div className="row">
//       <div className="col-lg-4 col-md-12 mb-4">
//         <img
//           src={require("../assets/photos/1-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />

//         <img
//           src={require("../assets/photos/2-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />

//         <img
//           src={require("../assets/photos/3-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />

//         <img
//           src={require("../assets/photos/4-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />

//         <img
//           src={require("../assets/photos/5-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />

//         <img
//           src={require("../assets/photos/6-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />
//       </div>

//       <div className="col-lg-4 col-md-6 mb-4">
//         <img
//           src={require("../assets/photos/7-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />
//         <img
//           src={require("../assets/photos/8-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />
//         <img
//           src={require("../assets/photos/9-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />

//         <img
//           src={require("../assets/photos/10-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />

//         <img
//           src={require("../assets/photos/11-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />

//         <img
//           src={require("../assets/photos/12-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />

//         <img
//           src={require("../assets/photos/13-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />
//       </div>

//       <div className="col-lg-4 col-md-6 mb-4">
//         <img
//           src={require("../assets/photos/14-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />
//         <img
//           src={require("../assets/photos/15-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />

//         <img
//           src={require("../assets/photos/16-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />

//         <img
//           src={require("../assets/photos/17-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />

//         <img
//           src={require("../assets/photos/18-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />

//         <img
//           src={require("../assets/photos/19-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />

//         <img
//           src={require("../assets/photos/20-min.jpg")}
//           className="img-fluid mb-4"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import usePhotoData from "../hooks/usePhotoData";
import "./Photo.css";

export default function Portfolio({}) {
  const { state, setState } = usePhotoData();

  // const photoList = state.photos.map((photo) => (
  //   <div key={photo.id} className="photoContainer">
  //     <span>
  //       <img
  //         className="photo"
  //         src={require(`../assets/photos${photo.url}`)}
  //         alt="Photo By Yuliia Bodrug"
  //       />
  //     </span>
  //     <div>{photo.description}</div>
  //     <br />
  //   </div>
  // ));

  return (
    <span>
      <div>
        {state.photos.map((photo) => (
          <div key={photo.id} className="photoContainer">
            <span>
              <img
                className="photo"
                src={require(`../assets/photos${photo.url}`)}
                alt="Photo By Yuliia Bodrug"
              />
            </span>
            <div className="description">{photo.description}</div>
            <br />
          </div>
        ))}
      </div>
    </span>
  );
}
