import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "33%",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "49%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    boxShadow: "1px 1px 4px #eaeaea",
  },
  title: {
    margin: "1rem",
    fontSize: "1.3rem",
    fontWeight: 700,
  },
  media: {
    height: 140,
  },
  "@global": {
    a: {
      color: "black",
      textDecoration: "none",
    },
  },
}));

export default function HomeCard(props) {
  const classes = useStyles();
  const { image, title, link, id } = props;
  return (
    <Card className={classes.root}>
      <Link
        to={{
          pathname: `/${link}`,
        }}
      >
        <Hidden smDown>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="150"
            image={image}
            title={title}
          />
        </Hidden>
        <div className={classes.title}>{title}</div>
      </Link>
    </Card>
  );
}
