import React from "react";
import { Grid } from "@material-ui/core";

export default class About extends React.Component {
  render() {
    return (
      <div className="about-me" id="about">
        <h2>About Me</h2>
        <Grid container justify="space-between" alignItems="flex-start">
          <Grid item xs={12} sm={6}>
            <ul>
              <li>Sufficient experience in full stack development</li>
              <li>Solid knowledge in relational database</li>
              <li>Have experience using Azure, C# and SQL</li>
              <li>Have experience nodejs, javascript, react, redux, mongodb</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ul className="personality">
              <li>Efficient team player, Have GIT and Agile practices</li>
              <li>Have both patience, passion and positive attitude</li>
            </ul>
          </Grid>
        </Grid>
      </div>
    );
  }
}
