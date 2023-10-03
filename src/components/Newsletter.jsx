import React from "react";
import "../styles/NewsLetter.css";
import DOWNLOAD from "../images/down.svg";

function NewsLetter() {
  return (
    <section className="Newsletter__container">
      <div className="NewsLetter__text">
        <h2>Ready to start your journey?</h2>
        <button>
          <img src={DOWNLOAD} alt="icon" />
          Download for Windows
        </button>
      </div>
    </section>
  );
}

export default NewsLetter;
