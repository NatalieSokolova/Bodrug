import React from "react";
import usePaintingData from "../hooks/usePaintingData";
import "./Painting.css";

export default function Painting({}) {
  const { state, setState } = usePaintingData();
  let url;

  const paintingList = state.paintings.map((painting) => (
    <div key={painting.id} className="paintingContainer">
      <span>
        <img
          className="painting"
          src={require(`../assets/paintings${painting.url}`)}
          alt="painting By Yuliia Bodrug"
        />
      </span>
      <div>CAD {painting.price}</div>
      <div>year: {painting.year}</div>
      <div>materials: {painting.materials}</div>
      <div>{painting.description}</div>
      <br />
    </div>
  ));

  return (
    <span>
      <h1>Painting Portfolio</h1>
      <div>{paintingList}</div>
    </span>
  );
}
