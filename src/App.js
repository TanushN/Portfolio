import React from "react";
import "./App.css";
import Home from "./components/home";
import "semantic-ui-css/semantic.min.css";
import ParticlesComponent from "./components/particle";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";

import * as firebase from "firebase";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route
          path="/resume"
          component={() => {
            window.location.href =
              "https://firebasestorage.googleapis.com/v0/b/tanushn-portfolio.appspot.com/o/my_resume.pdf?alt=media&token=54bb5289-acd1-476f-a498-9804c51304db";
            return null;
          }}
        />
        <Route path="*">
          <Redirect path="/" />
        </Route>
      </Switch>
    </Router>
  );
}

function MainPage() {
  return (
    <>
      <ParticlesComponent />
      <Home />
    </>
  );
}

function Resume() {}

function NoMatch() {
  return <h1>No Match</h1>;
}

export default App;
