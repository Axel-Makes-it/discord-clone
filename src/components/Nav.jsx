import React from "react";
import "../styles/Nav.css";
import LOGO from "../images/Logo.svg";
import MENU from "../images/menu.svg";

function Nav() {
  return (
    <section className="nav__content">
      <nav>
        <img src={LOGO} alt="logo" />
        <ul>
          <li>Download</li>
          <li>Nitro</li>
          <li>Discover</li>
          <li>Safety</li>
          <li>Support</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
        <div className="nav__action">
          <div className="nav__login-btn">Open Discord</div>
          <img className="nav__menu-img" src={MENU} alt="Menu" />
        </div>
      </nav>
    </section>
  );
}

export default Nav;
