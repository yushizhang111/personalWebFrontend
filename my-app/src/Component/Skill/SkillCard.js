import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";
import SkillViewer from "../../View/SkillViewer";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  skills: {
    margin: 5,
  },
  title: {
    fontSize: "1rem",
  },
  card: {
    marginBottom: "1.5rem",
    border: "none",
  },
  background: {
    background: "aliceblue",
  },
}));

export default function SkillCard(props) {
  const { skillType, title, background, t } = props;
  const classes = useStyles();
  return (
    <Card
      variant="outlined"
      className={clsx(classes.card, {
        [classes.background]: background,
      })}
    >
      <CardContent>
        <div className={classes.title} color="textSecondary">
          {title}
        </div>
        <div className={classes.skills}>
          <SkillViewer skillType={skillType} tool={false} t={t} />
        </div>
        <div className={classes.skills}>
          <SkillViewer skillType={skillType} tool={true} t={t} />
        </div>
      </CardContent>
    </Card>
  );
}
