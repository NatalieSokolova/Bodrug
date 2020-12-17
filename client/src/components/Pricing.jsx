import React from "react";
import { toast } from "react-toastify";
import { copyrightError } from "../partials";
import "./Pricing.css";

export default function Pricing() {
  toast.configure();

  return (
    <div>
      <img
        src={require("../assets/top-min.jpg")}
        alt="by Iuliia Bodrug"
        className="banner"
        onContextMenu={(e) => {
          copyrightError();
          e.preventDefault();
        }}
      />
      <div className="pricing-text">
        <div className="pricing-column">
          <span>Dummy Text</span>
          <p>
            Cliche adaptogen ut cillum gentrify man braid street art. Fashion
            axe raclette semiotics pug. Try-hard pour-over letterpress irony
            shabby chic, shoreditch dreamcatcher biodiesel. Street art echo park
            ennui cliche 8-bit prism. In letterpress in locavore bushwick.
            Biodiesel la croix meh glossier, enamel pin stumptown nisi hexagon
            proident vinyl viral roof party woke actually. Poke excepteur enim
            in.
          </p>
        </div>
        <div className="pricing-column">
          <span>Dummy Text</span>
          <p>
            Cliche adaptogen ut cillum gentrify man braid street art. Fashion
            axe raclette semiotics pug. Try-hard pour-over letterpress irony
            shabby chic, shoreditch dreamcatcher biodiesel. Street art echo park
            ennui cliche 8-bit prism. In letterpress in locavore bushwick.
            Biodiesel la croix meh glossier, enamel pin stumptown nisi hexagon
            proident vinyl viral roof party woke actually. Poke excepteur enim
            in.
          </p>
        </div>
        <div className="pricing-column">
          <span>Dummy Text</span>
          <p>
            Cliche adaptogen ut cillum gentrify man braid street art. Fashion
            axe raclette semiotics pug. Try-hard pour-over letterpress irony
            shabby chic, shoreditch dreamcatcher biodiesel. Street art echo park
            ennui cliche 8-bit prism. In letterpress in locavore bushwick.
            Biodiesel la croix meh glossier, enamel pin stumptown nisi hexagon
            proident vinyl viral roof party woke actually. Poke excepteur enim
            in.
          </p>
        </div>
      </div>
    </div>
  );
}
