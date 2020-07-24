import React from "react";
import Grid from "@material-ui/core/Grid";
import Title from "../../Components/Title";
import Info from "../../Components/Info";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const InfoContainer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item>
            <Title />
          </Grid>
          <Grid item>
            <Info />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoContainer;
