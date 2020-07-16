import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Switch from "@material-ui/core/Switch";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
  },
}));

const actions = [
  { icon: <i color="primary" className="fab fa-github"></i>, name: "Github" },
  {
    icon: <i color="primary" className="fab fa-linkedin"></i>,
    name: "Linkedin",
  },
  { icon: <i color="primary" className="fas fa-download"></i>, name: "Resume" },
];

export default function SpeedDials(props) {
  const classes = useStyles();
  const direction = props.direction;
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="SpeedDial example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<AllInclusiveIcon />}
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
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
