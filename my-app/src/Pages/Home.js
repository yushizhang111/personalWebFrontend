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
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.scroll = this.scroll.bind(this);
  }

  scroll() {
    window.scrollTo(0, this.myRef.current.offsetTop);
  }
  render() {
    const { t, lng } = this.props;

    return (
      <div>
        <Grid container>
          <Grid item md={8} xs={12}>
            <BusinessCard t={t} />
          </Grid>
          <Hidden smDown>
            <Grid item md={4} xs={12}>
              <LinkCard />
            </Grid>
          </Hidden>
        </Grid>
        <Hidden xsDown>
          <div className="card-group">
            <Card
              image={skill}
              title={t("Skills") + ". . ."}
              link="skills"
              id="skill"
            />
            <Card
              image={project}
              title={t("Projects") + ". . ."}
              link="projects"
              id="project"
            />
            <Card
              image={work}
              title={t("Working Experience") + ". . ."}
              link="works"
              id="work"
            />
          </div>
        </Hidden>
        <Divider className="divider" light={true} ref={this.myRef} />
        <Routes t={t} lng={lng} scroll={this.scroll} />
      </div>
    );
  }
}
