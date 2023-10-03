import React from "react";
import "../styles/SecondHero.css";
import IMGONE from "../images/imgOne.svg";

function SecondHero() {
  return (
    <section className="sectionHero__container">
      <img src={IMGONE} alt="" />
      <div className="sectionHero__text">
        <h2>Create an invite-only place where you belong</h2>
        <p>
          Discord servers are organized into topic-based channels where you can
          collaborate, share, and just talk about your day without clogging up a
          group chat.
        </p>
      </div>
    </section>
  );
}

export default SecondHero;
