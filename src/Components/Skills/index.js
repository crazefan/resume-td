import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/";
import ErrorMessage from "../ErrorMessage/";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { TextareaAutosize } from "@material-ui/core";

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
  const [hasError, setHasError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const classes = useStyles();

  useEffect(() => {
    if (
      sessionStorage.getItem("skills") &&
      sessionStorage.getItem("skills") !== null
    ) {
      var localResult = JSON.parse(sessionStorage.getItem("skills"));
      setSkills(localResult);
      setIsLoading(false);
    } else {
      const myRequest = axios.CancelToken.source();
      const fetchItems = async () => {
        await axios
          .get(`https://resume-75d42.firebaseio.com/skillset.json`, {
            cancelToken: myRequest.token,
          })
          .then(
            (result) => {
              if (result.data === null) {
                setHasError(true);
                setErrorText("Database is missing the value");
                setIsLoading(false);
              } else {
                sessionStorage.setItem("skills", JSON.stringify(result.data));
                setSkills(result.data);
                setIsLoading(false);
              }
            },
            (error) => {
              setHasError(true);
              setErrorText(error.message);
              setIsLoading(false);
            }
          );
      };
      fetchItems();
      return () => {
        myRequest.cancel();
      };
    }
  }, []);

  return isLoading ? (
    <Spinner spinnerColor="#f48fb1"></Spinner>
  ) : hasError ? (
    <ErrorMessage err={errorText} />
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
