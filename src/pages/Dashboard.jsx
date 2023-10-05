import React from "react";
import "../styles/Dashboard.css";
import DashSideBar from "../components/DashSideBar";
import DashRightBar from "../components/DashRightBar";

function Dashboard() {
  return (
    <section className="dashboard__app">
      <DashSideBar />
      <DashRightBar />
    </section>
  );
}

export default Dashboard;
