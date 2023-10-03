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
          <div className="footer__cat">
            <h4>Product</h4>
            <span>Download</span>
            <span>Nitro</span>
            <span>Status</span>
            <span>App Directory</span>
          </div>
          <div className="footer__cat">
            <h4>Company</h4>
            <span>About</span>
            <span>Jobs</span>
            <span>Brand</span>
            <span>Newsroom</span>
          </div>
          <div className="footer__cat">
            <h4>Resources</h4>
            <span>College</span>
            <span>Support</span>
            <span>Safety</span>
            <span>Blog</span>
            <span>Feedback</span>
            <span>Developers</span>
            <span>StreamKit</span>
            <span>Creators</span>
            <span>Community</span>
          </div>
          <div className="footer__cat">
            <h4>Policies</h4>
            <span>Terms</span>
            <span>Privacy</span>
            <span>Cookie Settings</span>
            <span>Guelines</span>
            <span>Acknowlegements</span>
            <span>Licenses</span>
            <span>Company Information</span>
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
