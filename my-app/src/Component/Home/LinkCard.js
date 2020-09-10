import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import slogan from "../../img/slogan.png";

const useStyles = makeStyles((theme) => ({
  linkCard: {
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "265px",
    marginLeft: theme.spacing(2),
  },
  links: {
    width: "100%",
  },
  link: {
    color: "black",
    textDecoration: "none",
    "@global": {
      i: {
        color: "#ffd4d9",
        marginRight: "10px",
      },
    },
  },
  line: {
    margin: "0.5em 0",
  },
  slogan: {
    width: "100%",
    textAlign: "center",
    "@global": {
      img: {
        width: 250,
      },
    },
  },
}));

export default function BusinessCard() {
  const classes = useStyles();
  return (
    <div className={classes.linkCard}>
      <div className={classes.slogan}>
        <img src={slogan} alt="attitude" />
      </div>
      <div className={classes.links}>
        <div className={classes.line}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/yushizhang111"
            className={classes.link}
          >
            <i color="primary" className="fab fa-github"></i>
            <strong>Github</strong>
          </a>
        </div>
        {/* <div className={classes.line}>
          <a
            href="https://www.linkedin.com/in/yushi-zhang111/"
            className={classes.link}
          >
            <i color="primary" className="fab fa-linkedin"></i>
            <strong>Linkedin</strong>
          </a>
        </div> */}
      </div>
    </div>
  );
}
