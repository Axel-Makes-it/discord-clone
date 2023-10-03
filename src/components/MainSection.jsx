import React from "react";
import "../styles/MainSection.css";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import leftIMG from "../images/leftIMG.svg";
import rightIMG from "../images/rightIMG.svg";

function MainSection() {
  return (
    <section className="mainSection__section">
      <img className="leftIMG" src={leftIMG} alt="ICON" />
      <Nav />
      <Hero />
      <img className="rightIMG" src={rightIMG} alt="ICON" />
    </section>
  );
}

export default MainSection;
