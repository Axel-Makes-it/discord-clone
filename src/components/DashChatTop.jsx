import React from "react";
import "../styles/DashChatTop.css";
import tag from "../images/tag.svg";
import trash from "../images/trash.svg";

function DashChatTop() {
  return (
    <section className="dashChatTop__section">
      <div className="dashChatTop__info">
        <div className="dashChatTop__room">
          <img src={tag} alt="tag" />
          <span>Chat-Room-Name</span>
        </div>
        <div className="dashChatTop__trash" title="Delete Room">
          <img src={trash} alt="delete" />
        </div>
      </div>
    </section>
  );
}

export default DashChatTop;
