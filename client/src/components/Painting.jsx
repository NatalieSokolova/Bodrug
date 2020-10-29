import React from "react";
import usePaintingData from "../hooks/usePaintingData";
import "./Painting.css";

export default function Painting({}) {
  const { state, setState } = usePaintingData();

  // const paintingList = state.paintings.map((painting) => (
  //   <div key={painting.id} className="paintingContainer">
  //     <span>
  //       <img
  //         className="painting"
  //         src={require(`../assets/paintings${painting.url}`)}
  //         alt="painting By Yuliia Bodrug"
  //       />
  //     </span>
  //     <div>CAD {painting.price}</div>
  //     <div>year: {painting.year}</div>
  //     <div>materials: {painting.materials}</div>
  //     <div>{painting.description}</div>
  //     <br />
  //   </div>
  // ));

  return (
    <div className="outsideContainer">
      {state.paintings.map((painting) => (
        <div key={painting.id} className="paintingContainer">
          <span>
            <img
              className="painting"
              src={require(`../assets/paintings${painting.url}`)}
              alt="painting By Yuliia Bodrug"
            />
          </span>
          <div className="description">
            <div>CAD {painting.price}</div>
            <div>year: {painting.year}</div>
            <div>materials: {painting.materials}</div>
            <div>{painting.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
