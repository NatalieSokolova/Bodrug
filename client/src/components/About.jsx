import React from "react";
import { Card } from "antd";
import "./About.css";

export default function About({}) {
  return (
    <div class="about">
      <div class="image-stack">
        <div class="photo">
          <img
            src={require("../assets/about/IMG_1706.jpeg")}
            alt="Yulia Bodrug"
          />
        </div>
        <div class="photo">
          <img
            src={require("../assets/about/IMG_1711.jpg")}
            alt="Yulia Bodrug"
          />
        </div>
        <div class="photo">
          <img
            src={require("../assets/about/IMG_1710.jpeg")}
            alt="Yulia Bodrug"
          />
        </div>
        <div class="photo">
          <img
            src={require("../assets/about/IMG_1712.jpg")}
            alt="Yulia Bodrug"
          />
        </div>
        <div class="photo">
          <img
            src={require("../assets/about/IMG_1708.jpeg")}
            alt="Yulia Bodrug"
          />
        </div>
        {/* <div class="photo">
          <img
            src={require("../assets/about/IMG_1709.jpg")}
            alt="Yulia Bodrug"
          />
        </div> */}

        <Card className=" about-card home-pics animate__animated animate__fadeIn my-story">
          <span class="about-header">My Story</span>
          <p class="about-text">
            I'm baby blog distillery try-hard ethical cold-pressed shabby chic
            messenger bag meggings taiyaki occupy ennui. Heirloom artisan master
            cleanse 3 wolf moon scenester prism forage art party chillwave
            bespoke. Yuccie ugh you probably haven't heard of them bitters.
            Franzen freegan meditation seitan succulents taxidermy. La croix
            lo-fi marfa bespoke put a bird on it, tote bag hammock raw denim
            direct trade intelligentsia neutra chillwave. Quinoa +1 lyft wolf
            vaporware bicycle rights. Tbh tumblr gochujang swag, yuccie
            succulents dreamcatcher small batch messenger bag farm-to-table
            poutine craft beer copper mug chambray tote bag.
          </p>
        </Card>

        <Card className=" about-card home-pics animate__animated animate__fadeIn my-mission">
          <span class="about-header">My Mission</span>
          <p class="about-text">
            I'm baby blog distillery try-hard ethical cold-pressed shabby chic
            messenger bag meggings taiyaki occupy ennui. Heirloom artisan master
            cleanse 3 wolf moon scenester prism forage art party chillwave
            bespoke. Yuccie ugh you probably haven't heard of them bitters.
            Franzen freegan meditation seitan succulents taxidermy. La croix
            lo-fi marfa bespoke put a bird on it, tote bag hammock raw denim
            direct trade intelligentsia neutra chillwave.
          </p>
        </Card>

        <Card className=" about-card home-pics animate__animated animate__fadeIn my-vision">
          <span class="about-header">My Vision</span>
          <p class="about-text">
            I'm baby blog distillery try-hard ethical cold-pressed shabby chic
            messenger bag meggings taiyaki occupy ennui. Heirloom artisan master
            cleanse 3 wolf moon scenester prism forage art party chillwave
            bespoke. Yuccie ugh you probably haven't heard of them bitters.
            Franzen freegan meditation seitan succulents taxidermy.
          </p>
        </Card>
      </div>
    </div>
  );
}
