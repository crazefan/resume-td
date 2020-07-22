import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import Box from "@material-ui/core/Box";
import Spinner from "../Spinner/Spinner";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    flexWrap: "wrap",
    width: "500px",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  card: {
    display: "flex",
    background: "#f48fb1",
    borderRadius: "30px",
    maxHeight: "40px",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      background: "lightBlue",
    },
    justifyContent: "center",
    alignContent: "center",
    padding: "12px",
  },
  cardContent: {
    padding: "12px",
  },
  text: {
    fontSize: 24,
  },
}));

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const classes = useStyles();

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://resume-75d42.firebaseio.com/skillset.json`
      );
      setSkills(result.data);
      console.log(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return isLoading ? (
    <Spinner></Spinner>
  ) : (
    <div className={classes.root}>
      {skills.map((item) => (
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="subtitle2" className={classes.fontSize}>
              {item}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Skills;
