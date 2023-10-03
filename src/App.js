import "./App.css";
import FooterSection from "./components/FooterSection";
import MainSection from "./components/MainSection";
import SubSectionDown from "./components/SubSectionDown";
import SubSectionFive from "./components/SubSectionFive";
import SubSectionOne from "./components/SubSectionOne";
import SubSectionThree from "./components/SubSectionThree";
import SubSectionTwo from "./components/SubSectionTwo";

function App() {
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

export default App;
