import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/";
import axios from "axios";
import Box from "@material-ui/core/Box";
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
    [theme.breakpoints.up("sm")]: {
      width: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  card: {
    display: "flex",
    background: "#f48fb1",
    borderRadius: "20px",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      background: "lightBlue",
    },
  },
  cardContent: {
    padding: "10px 20px",
    "&:last-child": {
      paddingBottom: "10px",
    },
  },

  text: {
    fontSize: 18,
    fontWeight: 700,
  },
}));

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const classes = useStyles();

  useEffect(() => {
    const myRequest = axios.CancelToken.source();
    const fetchItems = async () => {
      const result = await axios(
        `https://resume-75d42.firebaseio.com/skillset.json`,
        {
          cancelToken: myRequest.token,
        }
      );
      setSkills(result.data);
      setIsLoading(false);
    };
    fetchItems();
    return () => {
      myRequest.cancel();
    };
  }, []);

  return isLoading ? (
    <Spinner spinnerColor="#f48fb1"></Spinner>
  ) : (
    <Box className={classes.root}>
      {skills.map((item) => (
        <Card key={skills.indexOf(item)} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.text}>{item}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Skills;
