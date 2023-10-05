import React from "react";
import "../styles/DashSideBar.css";
import discordIcon from "../images/discordIcon.png";
import plus from "../images/plus.svg";

function DashSideBar() {
  return (
    <section className="dashSidebar__section">
      <div className="dashSidebar__container">
        <div className="dashSidebar__discordIcon">
          <img src={discordIcon} alt="" width={26} />
        </div>
      </div>
      <div className="dashSidebar__container" id="border-line">
        <div className="dashSidebar__addChat">
          <img src={plus} alt="add chat" width={26} className="icon-hover" />
        </div>
      </div>
    </section>
  );
}

export default DashSideBar;
