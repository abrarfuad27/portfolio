import React from "react";
import { useEffect } from "react";
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

  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li className="nav-item">
          <a href="#" onClick={handleContactClick}>
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://drive.google.com/file/d/1k23q8or5cJFe9w_bHtmvNw5VSXvx1oZQ/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
