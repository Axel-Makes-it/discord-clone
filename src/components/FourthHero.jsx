import React from "react";
import "../styles/FourthHero.css";
import IMGTHREE from "../images/imgThree.svg";

function FourthHero() {
  return (
    <section className="fourthHero__container">
      <img src={IMGTHREE} alt="" />
      <div className="fourthHero__text">
        <h2>From few to a fandom</h2>
        <p>
          Get any community running with moderation tools and custom member
          access. Give members special powers, set up private channels, and
          more.
        </p>
      </div>
    </section>
  );
}

export default FourthHero;
