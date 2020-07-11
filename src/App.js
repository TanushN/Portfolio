import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import "semantic-ui-css/semantic.min.css";
import ParticlesComponent from "./components/particle";
import { Container } from "semantic-ui-react";

import * as firebase from "firebase";

function App() {
  let config = {
    apiKey: "AIzaSyB9zVC5uOU8ZCGVnedAlStgjDW5BKSMA9k",
    authDomain: "tanushn-portfolio.firebaseapp.com",
    databaseURL: "https://tanushn-portfolio.firebaseio.com",
    projectId: "tanushn-portfolio",
    storageBucket: "tanushn-portfolio.appspot.com",
    messagingSenderId: "353579030514",
    appId: "1:353579030514:web:640d37a66d2979a2b1fd6b",
    measurementId: "G-VNBNL1MF8Z",
  };

  firebase.initializeApp(config);
  firebase.analytics();

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
