import React from "react";
import { Chip, Card, Collapse, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "1rem",
    marginTop: theme.spacing(2),
    boxShadow: "1px 1px 4px #eaeaea",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  title: {
    fontSize: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skill: {
    fontSize: "0.9rem",
    margin: 3,
    color: "white",
  },
  apollo: {
    backgroundColor: "orange",
  },
  jr: {
    backgroundColor: "#ff5757",
  },
  student: {
    backgroundColor: "#51247A",
  },
  img: {
    width: "100%",
  },
  body: {
    whiteSpace: "pre-wrap",
    fontWeight: 700,
    marginTop: 10,
  },
  link: {
    marginTop: 10,

    "@global": {
      a: {
        color: "#c9c9c9",
        textDecoration: "underline",
      },
    },
  },
}));

export default function ProjectCard({
  id,
  name,
  skills,
  body,
  link,
  project,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card key={id} className={classes.root}>
      <div className={classes.title}>
        <div>{name}</div>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </div>
      <div>
        {skills.map((skill) => (
          <Chip
            className={clsx(
              classes.skill,
              {
                [classes.apollo]: project == "apollo",
              },
              {
                [classes.jr]: project == "jr",
              },
              {
                [classes.student]: project == "student",
              }
            )}
            key={skill.id}
            label={skill.name}
          />
        ))}
      </div>
      <div>
        {link ? (
          <div className={classes.link}>
            <a href={link}>Open the website...</a>
          </div>
        ) : null}
      </div>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className={classes.body}>{body}</div>
      </Collapse>
    </Card>
  );
}
