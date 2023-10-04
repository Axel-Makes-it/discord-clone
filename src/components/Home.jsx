import React from "react";
import MainSection from "./MainSection";
import SubSectionOne from "./SubSectionOne";
import SubSectionTwo from "./SubSectionTwo";
import SubSectionThree from "./SubSectionThree";
import SubSectionFive from "./SubSectionFive";
import SubSectionDown from "./SubSectionDown";
import FooterSection from "./FooterSection";

function Home() {
  return (
    <div>
      <MainSection />
      <SubSectionOne />
      <SubSectionTwo />
      <SubSectionThree />
      <SubSectionFive />
      <SubSectionDown />
      <FooterSection />
    </div>
  );
}

export default Home;
