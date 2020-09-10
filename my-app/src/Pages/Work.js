import React from "react";
import WorkViewer from "../View/WorkViewer";

export default class About extends React.Component {
  componentDidMount() {
    const { scroll } = this.props;
    scroll();
  }

  render() {
    const { t, lng } = this.props;
    return (
      <div id="works">
        <h2>{t("WORKING EXPERIENCE")}</h2>
        <WorkViewer t={t} lng={lng} />
      </div>
    );
  }
}
