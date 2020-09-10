import React from "react";
import SkillCard from "../Component/Skill/SkillCard";

export default class Skill extends React.Component {
  componentDidMount() {
    const { scroll } = this.props;
    scroll();
  }

  render() {
    const { t, lng } = this.props;
    return (
      <div id="skills">
        <h2>{t("SKILL LIST")}</h2>
        <div>
          <SkillCard
            skillType="Frontend"
            title={t("Front end")}
            background={true}
            t={t}
          />
        </div>
        <div>
          <SkillCard skillType="Backend" title={t("Back end")} t={t} />
        </div>
        <div>
          <SkillCard skillType="PM" title={t("Project Management")} t={t} />
        </div>
        <div>
          <SkillCard
            skillType="CP"
            title={t("Cloud Platform")}
            background={true}
            t={t}
          />
        </div>
        <div>
          <SkillCard skillType="ML" title={t("Machine Learning")} t={t} />
        </div>
        <div>
          <SkillCard
            skillType="UI"
            title={t("UI & UX Design")}
            background={true}
            t={t}
          />
        </div>
        <div>
          <SkillCard skillType="SEO" title="SEO" t={t} />
        </div>
        <div>
          <SkillCard
            skillType="Language"
            title={t("Language")}
            background={true}
            t={t}
          />
        </div>
        <div>
          <SkillCard skillType="Other" title={t("Others")} t={t} />
        </div>
      </div>
    );
  }
}
