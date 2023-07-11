import logo from "./logo.svg";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <link rel="icon" type="image/png" href="logo2.png" sizes="40x40" />
      </Helmet>
      <NavBar />
      <div className="grid">
        <div className="main-container">
          <Header />
          <Profiles />
          <h2 className="projects-label">Projects</h2>
          <div className="project-container">{projectArray}</div>
        </div>
      </div>
      <footer className="footer">© 2023 Abrar Fuad. All rights reserved</footer>
    </div>
  );
}

export default App;
