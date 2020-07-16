import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import {
  Avatar,
  Zoom,
  Fab,
  Container,
  useScrollTrigger,
  CssBaseline,
  Toolbar,
  AppBar,
  Hidden,
} from "@material-ui/core";
import SpeedDial from "../Component/Home/SpeedDial";
import WorkIcon from "@material-ui/icons/Work";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ListIcon from "@material-ui/icons/List";
import yushiLogo from "../img/yushiLogo.png";
import yushi from "../img/yushi.png";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(5),
    right: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(3),
  },
  appBar: {
    boxShadow: "none",
  },
  appBottomBar: {
    height: theme.spacing(4),
    top: "auto",
    bottom: 0,
  },
  logo: {
    height: 35,
    marginLeft: 20,
  },
  avatar: {
    display: "flex",
    alignItems: "center",
  },
  head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  about: {
    fontSize: "1.5rem",
    textDecoration: "underline",
    "@global": {
      a: { color: "black" },
    },
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  const content = props.content;
  const classes = useStyles();
  const actions = [
    {
      icon: <WorkIcon />,
      name: "Working Experience",
      link: "/works",
    },
    {
      icon: <AccountTreeIcon />,
      name: "Projects",
      link: "/projects",
    },
    {
      icon: <ListIcon />,
      name: "Skills",
      link: "/skills",
    },
  ];
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Container maxWidth="lg">
              <div className={classes.head}>
                <div className={classes.avatar}>
                  <Avatar alt="Yushi Zhang" src={yushi} />
                  <img
                    alt="logo"
                    src={yushiLogo}
                    className={classes.logo}
                  ></img>
                </div>
                <div className={classes.about}>
                  <Link to={{ pathname: `/about` }}>About</Link>
                </div>
              </div>
            </Container>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <Container maxWidth="lg" className={classes.content}>
          {content}
        </Container>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        <Hidden smUp>
          <AppBar position="fixed" color="primary" className={classes.appBottomBar}>
            <Toolbar>
              <SpeedDial direction="up" actions={actions} bottom={true} />
              <div className={classes.grow} />
            </Toolbar>
          </AppBar>
        </Hidden>
      </BrowserRouter>
    </React.Fragment>
  );
}
