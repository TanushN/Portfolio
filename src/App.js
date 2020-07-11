import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import "semantic-ui-css/semantic.min.css";
import ParticlesComponent from "./components/particle";
import { Container } from "semantic-ui-react";

import * as firebase from "firebase";

function App() {

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <ParticlesComponent />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Home />
      </div>
    </div>
  );
}

export default App;
