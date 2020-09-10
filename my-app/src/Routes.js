import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./Pages/About";
import Skill from "./Pages/Skill";
import Project from "./Pages/Project";
import Work from "./Pages/Work";

const Routes = ({ t, lng, scroll }) => (
  <main>
    <Switch>
      <Route exact path="/" render={(props) => <About {...props} t={t} />} />
      <Route
        exact
        path="/skills"
        render={(props) => (
          <Skill {...props} t={t} lng={lng} scroll={scroll} />
        )}
      />
      <Route
        exact
        path="/projects"
        render={(props) => (
          <Project {...props} t={t} lng={lng} scroll={scroll} />
        )}
      />
      <Route
        exact
        path="/works"
        render={(props) => (
          <Work {...props} t={t} lng={lng} scroll={scroll} />
        )}
      />
      <Route
        exact
        path="/about"
        render={(props) => (
          <About {...props} t={t} scroll={scroll} />
        )}
      />
    </Switch>
  </main>
);

export default Routes;
