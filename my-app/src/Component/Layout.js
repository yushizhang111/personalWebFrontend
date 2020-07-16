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
  FormHelperText,
} from "@material-ui/core";
import yushiLogo from "../img/yushiLogo.png";
import yushi from "../img/yushi.png";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(3),
  },
  appBar: {
    boxShadow: "none",
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
    alignItems:"center"

  },
  about: {
    fontSize: "1.5rem",
    textDecoration:"underline"
  }
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
      </BrowserRouter>
    </React.Fragment>
  );
}
