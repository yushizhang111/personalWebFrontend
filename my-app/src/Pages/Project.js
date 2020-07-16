import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import BusinessCard from "../Component/Home/BusinessCard";
import LinkCard from "../Component/Home/LinkCard";
import Card from "../Component/Home/Card";
import project from "../img/project.jpg";
import work from "../img/work.jpg";
import skill from "../img/skill.jpg";
import ProjectList from "../Component/Project/ProjectList";

export default class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <h2>PROJECT LIST</h2>
        <div>
          <ProjectList
            projectType="apollo"
            title="Apollo Motorhome Holidays"
            startTime="2019.7"
            endTime="2020.3"
          />
          <ProjectList
            projectType="jr"
            title="JR Academy"
            startTime="2017.2"
            endTime="2019.7"
          />
          <ProjectList
            projectType="student"
            title="Student Projects"
            startTime="2017.2"
            endTime="2018.11"
          />
        </div>
      </div>
    );
  }
}
