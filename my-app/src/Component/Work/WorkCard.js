import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 10,
  },

  position: {
    fontSize: "1.2rem",
    fontWeight: 700,
  },
  company: {
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "grey",
  },
  linkedin: {
    color: "lightcoral",
    textDecoration: "underline",
    fontWeight: 600,
  },
  description: {
    fontSize: "1rem",
    marginTop: 10,
  },
}));

export default function WorkCard(props) {
  const { company, position, start, end, description, linkedin } = props;
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <div className={classes.position} color="textSecondary">
          {position}
        </div>
        <Grid container justify="space-between">
          <Grid item>
            <div className={classes.company}>{company}</div>
          </Grid>
          <Grid item>
            <div className={classes.company}>
              {start} - {end}
            </div>
          </Grid>
        </Grid>
        {linkedin && (
          <a
            className={classes.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            href={linkedin}
          >
            Linkedin
          </a>
        )}
        <div className={classes.description}>{description}</div>
      </CardContent>
    </Card>
  );
}
