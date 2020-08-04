import React from "react";
import "./App.css";
import Home from "./components/home";
import "semantic-ui-css/semantic.min.css";
import ParticlesComponent from "./components/particle";


import * as firebase from "firebase";

function App() {

  return (
    <>
      <ParticlesComponent />
      <Home />
    </>
  );
}

export default App;
