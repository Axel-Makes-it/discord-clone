import React from "react";
import "../styles/Footer.css";
import TWITTER from "../images/twitter.svg";
import IG from "../images/IG.svg";
import FB from "../images/FB.svg";
import UTUBE from "../images/UTUBE.svg";
import TIKTOK from "../images/TIKTOK.svg";
import LOGO from "../images/Logo.svg";

function Footer() {
  return (
    <footer className="footer__section">
      <div className="footer__container">
        <div className="footer__content">
          <div>
            <ul className="ul">
              <li>
                <img src={TWITTER} alt="" />
              </li>
              <li>
                <img src={IG} alt="" />
              </li>
              <li>
                <img src={FB} alt="" />
              </li>
              <li>
                <img src={UTUBE} alt="" />
              </li>
              <li>
                <img src={TIKTOK} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__signup">
          <img src={LOGO} alt="" />
          <button>Open Discord</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
