import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner/";
import JobCard from "./JobCard/";
import { Grid } from "@material-ui/core";

const JobItems = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    const myRequest = axios.CancelToken.source();
    const fetchItems = async () => {
      const result = await axios(
        `https://resume-75d42.firebaseio.com/experience.json`,
        {
          cancelToken: myRequest.token,
        }
      );
      setJobs(Object.keys(result.data).map((key) => result.data[key]));
      setIsLoading(false);
    };
    fetchItems();
    return () => {
      myRequest.cancel();
    };
  }, []);

  return isLoading ? (
    <Spinner spinnerColor="lightBlue" />
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
