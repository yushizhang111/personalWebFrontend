import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./Pages/About";
import Skill from "./Pages/Skill";
import Project from "./Pages/Project";
import Work from "./Pages/Work";

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/skills" component={Skill} />
      <Route exact path="/projects" component={Project} />
      <Route exact path="/works" component={Work} />
      <Route exact path="/about" component={About} />
    </Switch>
  </main>
);

export default Routes;
