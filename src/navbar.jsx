import React from "react";
import { useState } from "react";
import "./styles.css";

export default function NavBar() {
  const handleContactClick = (e) => {
    e.preventDefault();
    const profilesSection = document.getElementById("profiles");
    profilesSection.scrollIntoView({ behavior: "smooth" });

    const profiles = document.querySelectorAll(".profile");
    profiles.forEach((profile) => {
      profile.classList.add("highlight");
      setTimeout(() => {
        profile.classList.remove("highlight");
      }, 2000); // Adjust the duration for how long the highlighting should last (in milliseconds)
    });
  };

  const [toggle, setToggle] = useState(false);

  // function to toggle the hamburger menu
  const handleHamburgerToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#" onClick={handleContactClick}>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://drive.google.com/file/d/1BbBfJHCMRTqRelmFqjj3h4ulGlo-VNWF/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleHamburgerToggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
      <div className={`hamburger-content ${toggle ? "active" : ""}`}>
        <div className="close-icon" onClick={handleHamburgerToggle}>
          &#10005; {/* Unicode for cross icon */}
        </div>

        <a href="#" onClick={handleContactClick}>
          Contact
        </a>

        <a
          href="https://drive.google.com/file/d/1BbBfJHCMRTqRelmFqjj3h4ulGlo-VNWF/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </>
  );
}
