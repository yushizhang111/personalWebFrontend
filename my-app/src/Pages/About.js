import React from "react";
import { Grid } from "@material-ui/core";

export default class About extends React.Component {
  componentDidMount() {
    const { scroll } = this.props;
    if (scroll) {
      scroll();
    }
  }

  render() {
    const { t } = this.props;
    return (
      <div className="about-me" id="about">
        <h2> {t("About Me")}</h2>
        <Grid container justify="space-between" alignItems="flex-start">
          <Grid item xs={12} sm={6}>
            <ul>
              <li>{t("Sufficient experience in front end development")}</li>
              <li>{t("Solid knowledge in HTML, CSS, JS")}</li>
              <li>
                {t("Sufficient experience in nodejs, reactjs, redux, mongodb")}
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ul className="personality">
              <li>
                {t("Efficient team player, Have GIT and Agile practices")}
              </li>
              <li>{t("Have patience, passion and positive attitude")}</li>
            </ul>
          </Grid>
        </Grid>
      </div>
    );
  }
}
