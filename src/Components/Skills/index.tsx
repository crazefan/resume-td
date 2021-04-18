import React, { useState, useEffect } from "react";

import Spinner from "../Spinner/";
import ErrorMessage from "../ErrorMessage/";
import { fetchData } from "../../Utils/FirebaseFetch";

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
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const classes = useStyles();

  useEffect(() => {
    if (sessionStorage.getItem("skills")) {
      setSkills(JSON.parse(sessionStorage.getItem("skills")!));
      setIsLoading(false);
      return;
    }
    const fetchItems = async (): Promise<void> => {
      const [data, error] = await fetchData("skillset.json");
      if (data) {
        sessionStorage.setItem("skills", JSON.stringify(data));
        setSkills(data);
        setIsLoading(false);
        return;
      }
      if (error) {
        setHasError(true);
        setErrorMessage(error.message);
        setIsLoading(false);
      }
    };
    fetchItems();
  }, []);

  return isLoading ? (
    <Spinner spinnerColor="#f48fb1"></Spinner>
  ) : hasError ? (
    <ErrorMessage message={errorMessage} />
  ) : (
    <Box className={classes.root}>
      {skills.map((skill) => (
        <Card key={skills.indexOf(skill)} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.text}>{skill}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Skills;
