import React from "react";
import "../styles/MainSection.css";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

function MainSection() {
  return (
    <section className="mainSection__section">
      <Nav />
      <Hero />
    </section>
  );
}

export default MainSection;
