import React from "react";
import "../styles/Hero.css";
import DOWNLOAD2 from "../images/download2.svg";

function Hero() {
  return (
    <section className="hero__section">
      <div className="hero__container">
        <div className="hero__text">
          <h1>IMAGINE A PLACE...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>
        <div className="hero__btn__container">
          <button className="hero__btn-white">
            <img src={DOWNLOAD2} alt="download" />
            Download for Windows
          </button>
          <button className="hero__btn-black">
            Open Discord in your broswer
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
