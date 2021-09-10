import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import CardComponent from "./CardComponent";

const ClassesComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.cards}
      >
        <Grid container item xs={12} sm={12} md={12} spacing={2}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cards: {
    marginTop: 15,
  },
  avatar: {
    backgroundColor: "#757de8",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "66.66%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default ClassesComponent;
