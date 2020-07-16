import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import BusinessCard from "../Component/Home/BusinessCard";
import LinkCard from "../Component/Home/LinkCard";
import Card from "../Component/Home/Card";
import project from "../img/project.jpg";
import work from "../img/work.jpg";
import skill from "../img/skill.jpg";
import SkillCard from "../Component/Skill/SkillCard";

export default class Skill extends React.Component {

  render() {
    return (
      <div id="skills">
        <h2>SKILL LIST</h2>
        <div>
          <SkillCard skillType="Backend" title="Back end" />
        </div>
        <div>
          <SkillCard skillType="Frontend" title="Front end" background={true} />
        </div>
        <div>
          <SkillCard skillType="PM" title="Project Management" />
        </div>
        <div>
          <SkillCard skillType="CP" title="Cloud Platform" background={true} />
        </div>
        <div>
          <SkillCard skillType="ML" title="Machine Learning" />
        </div>
        <div>
          <SkillCard
            skillType="ML"
            title="Machine Learning"
            background={true}
          />
        </div>
        <div>
          <SkillCard skillType="UI" title="UI & UX Design" />
        </div>
        <div>
          <SkillCard skillType="SEO" title="SEO" background={true} />
        </div>
        <div>
          <SkillCard skillType="Language" title="Language" />
        </div>
        <div>
          <SkillCard skillType="Other" title="Others" background={true} />
        </div>
      </div>
    );
  }
}
