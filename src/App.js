import React from "react";
import "./App.css";
import Home from "./components/home";
import "semantic-ui-css/semantic.min.css";
import ParticlesComponent from "./components/particle";


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
    <>
      <ParticlesComponent />
      <Home />
    </>
  );
}

export default App;
