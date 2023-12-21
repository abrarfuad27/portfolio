import React from "react";
import "./styles.css";

export default function Tech(props) {
  return (
    <div className="single-tech">
      <img className="tech-image" src={props.tech.image} alt="Pic" />
      <p className="tech-name">{props.tech.name}</p>
    </div>
  );
}
