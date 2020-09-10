import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import SchoolTwoToneIcon from "@material-ui/icons/SchoolTwoTone";
import { Hidden, Grid } from "@material-ui/core";
import SpeedDial from "./SpeedDial";
import yushi from "../../img/yushi-large.jpeg";

const useStyles = makeStyles((theme) => ({
  businessCard: {
    position: "relative",
    borderRadius: "5px",
    overflow: "hidden",
    display: "flex",
    height: "265px",
    boxShadow: "1px 1px 4px #eaeaea",
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  },
  avatar: {
    display: "contents",
    "@global": {
      img: {
        height: "100%",
      },
    },
  },
  content: {
    width: "100%",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    "@global": {
      h1: {
        margin: 0,
        marginLeft: theme.spacing(1),
      },
    },
  },
  edu: {
    display: "flex",
    alignItems: "center",
    fontSize: "0.8rem",
    fontWeight: 600,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    "@global": {
      ".MuiSvgIcon-root": {
        marginRight: theme.spacing(1),
      },
    },
  },
  uni: {
    color: "#c9c9c9",
  },
  tel: {
    color: "#707070",
    marginLeft: theme.spacing(1),
  },
}));

export default function BusinessCard(props) {
  const { t } = props;
  const classes = useStyles();
  const actions = [
    {
      icon: <i color="primary" className="fab fa-github"></i>,
      name: "Github",
      link: "https://github.com/yushizhang111",
    },
    // {
    //   icon: <i color="primary" className="fab fa-linkedin"></i>,
    //   name: "Linkedin",
    //   link: "https://www.linkedin.com/in/yushi-zhang111/",
    // },
  ];
  return (
    <div className={classes.businessCard}>
      <Hidden mdUp xsDown>
        <SpeedDial direction="left" actions={actions} />
      </Hidden>
      <Hidden smUp>
        <SpeedDial direction="down" actions={actions} />
      </Hidden>
      <Hidden xsDown>
        <div className={classes.avatar}>
          <img alt="yushi" src={yushi}></img>
        </div>
      </Hidden>
      <div className={classes.content}>
        <h1>{t("Yushi Zhang")} </h1>
        <div className={classes.tel}>
          zyushi111@hotmail.com | yushizhang.work@gmail.com | +61451575825
        </div>
        <div>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6} lg={4}>
              <h3>
                <BubbleChartIcon color="primary" />
                {t("Front-end Developer")}
              </h3>
              <h3>
                <BubbleChartIcon color="primary" />
                {t("Full Stack Developer")}
              </h3>
              <h3>
                <BubbleChartIcon color="primary" />
                {t("Web Developer")}
              </h3>
            </Grid>
            <Grid item xs={12} sm={6} lg={8}>
              <div className={classes.edu}>
                <SchoolTwoToneIcon color="primary" />
                <div>
                  <div>{t("Master of Information Technology")}</div>
                  <div className={classes.uni}>
                    {t("University of Queensland (AU)")}
                  </div>
                </div>
              </div>
              <div className={classes.edu}>
                <SchoolTwoToneIcon color="primary" />
                <div>
                  <div>
                    {t("Master by Research in Integrative Neuroscience")}
                  </div>
                  <div className={classes.uni}>
                    {t("University of Edinburgh (UK)")}
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
