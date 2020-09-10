import React from "react";
import ProjectList from "../Component/Project/ProjectList";

export default class Projects extends React.Component {
  componentDidMount() {
    const { scroll } = this.props;
    scroll();
  }

  render() {
    const { t, lng } = this.props;
    return (
      <div id="projects">
        <h2>{t("PROJECT LIST")}</h2>
        <div>
          <ProjectList
            projectType="apollo"
            title="Apollo Motorhome Holidays"
            startTime="2019.7"
            endTime="2020.3"
            t={t}
            lng={lng}
          />
          <ProjectList
            projectType="jr"
            title={t("JR Academy")}
            startTime="2017.2"
            endTime="2019.7"
            t={t}
            lng={lng}
          />
          <ProjectList
            projectType="student"
            title={t("Students Projects")}
            startTime="2017.2"
            endTime="2018.11"
            t={t}
            lng={lng}
          />
        </div>
      </div>
    );
  }
}
