import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/";
import JobCard from "./JobCard/";
import { Grid } from "@material-ui/core";
import { fetchItems } from "../../Utils/";

const JobItems = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    (async () => {
      setJobs(await fetchItems("experience.json"));
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? (
    <Spinner spinnerColor="lightBlue" />
  ) : (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-start"
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
