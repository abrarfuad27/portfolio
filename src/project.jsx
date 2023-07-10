import React from "react";
import "./styles.css";

export default function Project(props) {
  return (
    <a className="project-anchor" href={props.project.url} target="_blank">
    <div className="single-project">
      <img className="image" src={props.project.image} alt="Pic" />
      <div className="writings">
        <h3 className="title">{props.project.title}</h3>
        <p className="description">{props.project.description}</p>
      </div>
    </div>
    </a>
  );
}
