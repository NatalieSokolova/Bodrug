import React from "react";
import useArtData from "../hooks/useArtData";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./Art.css";

export default function Art() {
  toast.configure();

  const { state, setState } = useArtData();

  const artList = state.arts.map((art) => (
    <div key={art.id} className="artContainer">
      <span>
        <img
          className="art"
          src={require(`../assets/art${art.url}`)}
          alt="art By Yuliia Bodrug"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
        />
      </span>
      <div>CAD {art.price}</div>
      <div>year: {art.year}</div>
      <div>materials: {art.materials}</div>
      <div>{art.description}</div>
      <br />
    </div>
  ));

  return (
    <span>
      <h1>art Portfolio</h1>
      <div>{artList}</div>
    </span>
  );
}
