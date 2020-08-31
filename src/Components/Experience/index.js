import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner/";
import JobCard from "./JobCard/index.tsx";
import ErrorMessage from "../ErrorMessage";
import { Grid } from "@material-ui/core";

const JobItems = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    if (sessionStorage.getItem("experience")) {
      var localResult = JSON.parse(sessionStorage.getItem("experience"));
      setJobs(Object.keys(localResult).map((key) => localResult[key]));
      setIsLoading(false);
    } else {
      const myRequest = axios.CancelToken.source();
      const fetchItems = async () => {
        await axios
          .get(`https://resume-75d42.firebaseio.com/experience.json`, {
            cancelToken: myRequest.token,
          })
          .then(
            (result) => {
              if (result.data === null) {
                setHasError(true);
                setErrorMessage("Database is missing the requested value.");
                setIsLoading(false);
              } else {
                sessionStorage.setItem(
                  "experience",
                  JSON.stringify(result.data)
                );
                setJobs(
                  Object.keys(result.data).map((key) => result.data[key])
                );
                setIsLoading(false);
              }
            },
            (error) => {
              setHasError(true);
              setErrorMessage(error.message);
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
    <Spinner spinnerColor="lightBlue" />
  ) : hasError ? (
    <ErrorMessage message={errorMessage} />
  ) : (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="flex-start">
      {jobs.map((item) => (
        <Grid key={item.id} item md={3}>
          <JobCard key={item.id} item={item}></JobCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default JobItems;
