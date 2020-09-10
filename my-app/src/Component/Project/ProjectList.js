import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  const { projectType, title, t, lng } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>{title}</div>
      <ProjectViewer projectType={projectType} t={t} lng={lng}/>
    </div>
  );
}
