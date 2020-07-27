import React from "react";
import Title from "../../Components/Title";
import Info from "../../Components/Info";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    margin: "50px 20px 30px 20px",
  },
});

const InfoContainer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box mx={"auto"}>
        <Title />
      </Box>
      <Box mx={"auto"} mt={4}>
        <Info />
      </Box>
    </Box>
  );
};

export default InfoContainer;
