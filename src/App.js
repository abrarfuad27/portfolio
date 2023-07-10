import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "./styles.css";
import NavBar from "./navbar";
import Header from "./header";
import Profiles from "./profiles";
import data from "./data";
import Project from "./project";

function App() {
  const projectArray = data.map((project, index) => {
    return <Project key={index} project={project} />;
  });
  return (
    <div>
      <NavBar />
      <div className="grid">
        <div className="main-container">
          <Header />
          <Profiles />
          <h2 className="projects-label">Projects</h2>
          <div className="project-container">{projectArray}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
