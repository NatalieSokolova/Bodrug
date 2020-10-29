import React from "react";
import "./About.css";

export default function About({}) {
  return (
    <div class="about">
      <div class="photo">
        <img
          src={require("../assets/paintings/europeana-YIfFVwDcgu8-unsplash.jpg")}
          alt="Yulia Bodrug"
        />
      </div>
      <div className="column">
        <span class="about-header">My Story</span>
        <p class="about-text">
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
      <div class="photo">
        <img
          src={require("../assets/paintings/tamara-menzi-n-vnWQmmVoY-unsplash.jpg")}
          alt="Yulia Bodrug"
        />
      </div>
      <div className="column">
        <span class="about-header">My Mission</span>
        <p class="about-text">
          I'm baby blog distillery try-hard ethical cold-pressed shabby chic
          messenger bag meggings taiyaki occupy ennui. Heirloom artisan master
          cleanse 3 wolf moon scenester prism forage art party chillwave
          bespoke. Yuccie ugh you probably haven't heard of them bitters.
          Franzen freegan meditation seitan succulents taxidermy. La croix lo-fi
          marfa bespoke put a bird on it, tote bag hammock raw denim direct
          trade intelligentsia neutra chillwave.
        </p>
      </div>
      <div class="photo">
        <img
          src={require("../assets/paintings/the-new-york-public-library-R5oumqz_lhY-unsplash.jpg")}
          alt="Yulia Bodrug"
        />
      </div>
      <div className="column">
        <span class="about-header">My Vision</span>
        <p class="about-text">
          I'm baby blog distillery try-hard ethical cold-pressed shabby chic
          messenger bag meggings taiyaki occupy ennui. Heirloom artisan master
          cleanse 3 wolf moon scenester prism forage art party chillwave
          bespoke. Yuccie ugh you probably haven't heard of them bitters.
          Franzen freegan meditation seitan succulents taxidermy.
        </p>
      </div>
      <div class="photo">
        <img
          src={require("../assets/paintings/europeana-qi9jveT9X6A-unsplash.jpg")}
          alt="Yulia Bodrug"
        />
      </div>
    </div>
  );
}
