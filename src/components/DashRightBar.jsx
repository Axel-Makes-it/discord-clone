import React from "react";
import "../styles/DashRightBar.css";
import DashChatTop from "./DashChatTop";
import DashChatLog from "./DashChatLog";

function DashRightBar() {
  return (
    <section className="DashRightBar__section">
      <DashChatTop />
      <DashChatLog />
    </section>
  );
}

export default DashRightBar;
