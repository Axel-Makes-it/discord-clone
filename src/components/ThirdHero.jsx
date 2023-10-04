import React from "react";
import "../styles/ThirdHero.css";
import IMGTWO from "../images/imgTwo.svg";

function ThirdHero() {
  return (
    <section className="thirdHero__container">
      <div className="thirdHero__text">
        <h2>Where hanging out is easy</h2>
        <p>
          Grab a seat in a voice channel when you’re free. Friends in your
          server can see you’re around and instantly pop in to talk without
          having to call.
        </p>
      </div>
      <img className="imgTwo" src={IMGTWO} alt="icon" />
    </section>
  );
}

export default ThirdHero;
