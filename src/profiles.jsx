import React from "react";
import "./styles.css";

export default function Profiles() {
  return (
    <div className="button-container" id="profiles">
      <a
        className="profile"
        href="https://www.linkedin.com/in/abrarfuad27/"
        target="_blank"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        className="profile"
        href="https://github.com/abrarfuad27"
        target="_blank"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        className="profile"
        href="https://www.facebook.com/abrar.fuad.50"
        target="_blank"
      >
        <i className="fab fa-facebook"></i>
      </a>
      <a
        className="profile"
        href="https://www.instagram.com/abrarfuad.27"
        target="_blank"
      >
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
}