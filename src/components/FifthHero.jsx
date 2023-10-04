import React from "react";
import "../styles/FifthHero.css";
import IMGFIVE from "../images/imgFive.png";

function FifthHero() {
  return (
    <section className="fifthHero__container">
      <div className="fifthHero__text">
        <h2>Reliable tech for staying close</h2>
        <p>
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
        <img className="imgFive" src={IMGFIVE} alt="ICON" />
      </div>
    </section>
  );
}

export default FifthHero;
