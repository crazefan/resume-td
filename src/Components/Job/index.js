import React from "react";
import Spinner from "../Spinner/Spinner";
import JobCard from "./Job";
import { Grid } from "@material-ui/core";

const JobItems = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="flex-start">
      {items.map((item) => (
        <Grid key={item.id} item md={3}>
          <JobCard key={item.id} item={item}></JobCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default JobItems;
