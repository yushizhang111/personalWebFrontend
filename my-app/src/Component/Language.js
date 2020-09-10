import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Menu, MenuItem, Hidden } from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";

const useStyles = makeStyles((theme) => ({
  translation: {
    backgroundColor: "white",
    marginRight: "1rem",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
      minWidth: 40,
      borderRadius: "50%",
      height: 44,
      width: 44,
      paddingBottom: 3,
    },
  },
  language: {
    display: "inline-block",
    verticalAlign: "middle",
    lineHeight: "normal",
  },
}));

export default function Language(props) {
  const classes = useStyles();
  const { i18n, handleAllLanguages } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [language, setLanguage] = React.useState("中文");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguage = (lng) => {
    i18n.changeLanguage(lng);

    if (lng === "zh") {
      setLanguage("中文");
    }
    if (lng === "en") {
      setLanguage("EN");
    }
    handleAllLanguages(lng);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.translation}
      >
        <Hidden xsDown>
          <TranslateIcon />
        </Hidden>
        <span className={classes.language}>{language}</span>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleLanguage("zh")}>中文</MenuItem>
        <MenuItem onClick={() => handleLanguage("en")}>English</MenuItem>
      </Menu>
    </div>
  );
}
