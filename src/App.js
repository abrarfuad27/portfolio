import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "./styles.css";
import NavBar from "./navbar";
import Header from "./header";
import Profiles from "./profiles";

function App() {
  return (
    <div>
      <NavBar />
      <div className="grid">
        <div className="main-container">
          <Header/>
          <Profiles/>
        </div>
      </div>
    </div>
  );
}

export default App;
