import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import ViewHeadlineSharpIcon from "@material-ui/icons/ViewHeadlineSharp";
import { useHistory } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    transform: "translateZ(0px)",
    flexGrow: 1,
    right: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      top: theme.spacing(2),
    },
  },
  rootBottom: {
    position: "absolute",
    zIndex: 1,
    bottom: theme.spacing(4.5),
    left: theme.spacing(2),

    margin: "0 auto",
    width: "fit-content",
    "@global": {
      ".MuiFab-primary": {
        color: "lightcoral",
        backgroundColor: "white",
      },
      ".MuiSpeedDialAction-fab": {
        color: "white",
        backgroundColor: "lightcoral",
      },
    },
  },
  radioGroup: {
    margin: theme.spacing(1, 0),
  },
  "@global": {
    ".MuiFab-root": {
      width: 35,
      height: 35,
      boxShadow: "1px 1px 4px #eaeaea",
    },
    ".MuiFab-primary": {
      color: "white",
    },
    ".MuiSpeedDialAction-staticTooltipLabel": {
      color: "white",
      backgroundColor: "grey",
      whiteSpace: "nowrap",
      display: "inline-block",
      verticalAlign: "middle",
      lineHeight: "normal",
      paddingBottom:0
    },
  },
}));

export default function SpeedDials(props) {
  const classes = useStyles();
  const { direction, actions, bottom } = props;
  const [open, setOpen] = React.useState(true);
  let history = useHistory();
  const handleClose = () => {
    setOpen(false);
  };
  const handleOptions = (bottom, link) => {
    setOpen(false);
    console.log(bottom);
    if (bottom) {
      let path = link;
      history.push(path);
    } else {
      console.log(link);
      window.location.href = link;
    }
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div
      className={clsx(
        { [classes.root]: !bottom },
        { [classes.rootBottom]: bottom }
      )}
    >
      <SpeedDial
        ariaLabel="SpeedDial example"
        className={classes.speedDial}
        hidden={false}
        icon={bottom ? <ViewHeadlineSharpIcon /> : <AllInclusiveIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={direction}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen={bottom}
            tooltipPlacement="right"
            onClick={() => handleOptions(bottom, action.link)}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
