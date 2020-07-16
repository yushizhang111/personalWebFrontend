import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";
import ProjectViewer from "../../View/ProjectViewer";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom:'2rem'
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: 600,
  },
}));

export default function ProjectList(props) {
  const { projectType, title, startTime, endTime } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>{title}</div>
      <div className={classes.subTitle}>
        From {startTime} to {endTime}
      </div>
      <ProjectViewer projectType={projectType} />
    </div>
  );
}
