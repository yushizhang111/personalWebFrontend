import React from "react";
import { Grid, Hidden, Divider } from "@material-ui/core";
import BusinessCard from "../Component/Home/BusinessCard";
import LinkCard from "../Component/Home/LinkCard";
import Card from "../Component/Home/Card";
import project from "../img/project.jpg";
import work from "../img/work.jpg";
import skill from "../img/skill.jpg";
import Routes from "../Routes";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item md={8} xs={12}>
            <BusinessCard />
          </Grid>
          <Hidden smDown>
            <Grid item md={4} xs={12}>
              <LinkCard />
            </Grid>
          </Hidden>
        </Grid>
        <Hidden xsDown>
          <div className="card-group">
            <Card image={skill} title="Skills . . ." link="skills" id="skill" />
            <Card
              image={project}
              title="Projects . . ."
              link="projects"
              id="project"
            />
            <Card
              image={work}
              title="Working Experience . . ."
              link="works"
              id="work"
            />
          </div>
        </Hidden>
        <Divider className="divider" light={true} />
        <Routes />
      </div>
    );
  }
}
