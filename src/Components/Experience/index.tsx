import React, { useState, useEffect } from "react";
import { fetchData } from "../../Utils/FirebaseFetch";

import Spinner from "../Spinner/";
import JobCard from "./JobCard/index";
import ErrorMessage from "../ErrorMessage";

import { Grid } from "@material-ui/core";

const JobItems = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  useEffect(() => {
    if (sessionStorage.getItem("experience")) {
      const localResult = JSON.parse(sessionStorage.getItem("experience")!);
      setJobs(Object.keys(localResult).map((key) => localResult[key]));
      setIsLoading(false);
      return;
    }
    const fetchItems = async (): Promise<void> => {
      const [data, error] = await fetchData("experience.json");
      if (data) {
        sessionStorage.setItem("experience", JSON.stringify(data));
        setJobs(Object.keys(data).map((key) => data[key]));
        setIsLoading(false);
        return;
      }
      if (error) {
        setHasError(true);
        setErrorMessage(error.message);
        setIsLoading(false);
        return;
      }
    };
    fetchItems();
  }, []);

  return isLoading ? (
    <Spinner spinnerColor="lightBlue" />
  ) : hasError ? (
    <ErrorMessage message={errorMessage} />
  ) : (
    <Grid container spacing={2} direction="row" justify="center" alignItems="flex-start">
      {jobs.map((job) => (
        <Grid key={job.id} item md={3}>
          <JobCard key={job.id} job={job}></JobCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default JobItems;
