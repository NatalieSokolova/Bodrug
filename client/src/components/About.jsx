import React from "react";
import ScrollBtn from "./ScrollBtn";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./About.css";

export default function About() {
  toast.configure();

  return (
    <div className="about">
      <ScrollBtn />
      <div className="photo">
        <img
          src={require("../assets/paintings/europeana-YIfFVwDcgu8-unsplash-min.jpg")}
          alt="Yulia Bodrug"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
        />
      </div>
      <div className="column  animate__animated animate__fadeIn">
        <span className="about-header">My Story</span>
        <p className="about-text">
          I'm baby blog distillery try-hard ethical cold-pressed shabby chic
          messenger bag meggings taiyaki occupy ennui. Heirloom artisan master
          cleanse 3 wolf moon scenester prism forage art party chillwave
          bespoke. Yuccie ugh you probably haven't heard of them bitters.
          Franzen freegan meditation seitan succulents taxidermy. La croix lo-fi
          marfa bespoke put a bird on it, tote bag hammock raw denim direct
          trade intelligentsia neutra chillwave. Quinoa +1 lyft wolf vaporware
          bicycle rights. Tbh tumblr gochujang swag, yuccie succulents
          dreamcatcher small batch messenger bag farm-to-table poutine craft
          beer copper mug chambray tote bag.
        </p>
      </div>
      <div className="photo">
        <img
          src={require("../assets/paintings/tamara-menzi-n-vnWQmmVoY-unsplash-min.jpg")}
          alt="Yulia Bodrug"
          id="mission-anchor"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
        />
      </div>
      <div className="column  animate__animated animate__fadeIn">
        <span className="about-header">My Mission</span>
        <p className="about-text">
          I'm baby blog distillery try-hard ethical cold-pressed shabby chic
          messenger bag meggings taiyaki occupy ennui. Heirloom artisan master
          cleanse 3 wolf moon scenester prism forage art party chillwave
          bespoke. Yuccie ugh you probably haven't heard of them bitters.
          Franzen freegan meditation seitan succulents taxidermy. La croix lo-fi
          marfa bespoke put a bird on it, tote bag hammock raw denim direct
          trade intelligentsia neutra chillwave.
        </p>
      </div>
      <div className="photo">
        <img
          src={require("../assets/paintings/the-new-york-public-library-R5oumqz_lhY-unsplash-min.jpg")}
          alt="Yulia Bodrug"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
        />
      </div>
      <div className="column  animate__animated animate__fadeIn">
        <span className="about-header">My Vision</span>
        <p className="about-text">
          I'm baby blog distillery try-hard ethical cold-pressed shabby chic
          messenger bag meggings taiyaki occupy ennui. Heirloom artisan master
          cleanse 3 wolf moon scenester prism forage art party chillwave
          bespoke. Yuccie ugh you probably haven't heard of them bitters.
          Franzen freegan meditation seitan succulents taxidermy.
        </p>
      </div>
      <div className="photo">
        <img
          src={require("../assets/paintings/europeana-qi9jveT9X6A-unsplash-min.jpg")}
          alt="Yulia Bodrug"
          onContextMenu={(e) => {
            copyrightError();
            e.preventDefault();
          }}
        />
      </div>
    </div>
  );
}
