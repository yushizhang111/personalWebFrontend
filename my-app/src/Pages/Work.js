import React from "react";
import { Grid } from "@material-ui/core";
import BusinessCard from "../Component/Home/BusinessCard";
import LinkCard from "../Component/Home/LinkCard";
import Card from "../Component/Home/Card";
import project from "../img/project.jpg";
import work from "../img/work.jpg";
import skill from "../img/skill.jpg";
import SkillCard from "../Component/Skill/SkillCard";
import WorkViewer from "../View/WorkViewer";

export default class About extends React.Component {
  render() {
    return (
      <div id="works">
        <h2>WORKING EXPERIENCE</h2>
        <WorkViewer />
      </div>
    );
  }
}
