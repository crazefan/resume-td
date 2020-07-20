import React from "react";
import { useState, useEffect } from "react";
import JobItems from "./Components/Job/index";
import { Container, Typography } from "@material-ui/core";
import { fetchItems } from "./Utils/index";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(async () => {
    setJobs(await fetchItems("experience.json"));
    setIsLoading(false);
  }, []);

  return (
    <Container>
      <Typography variant="h5">Timur Dolgopolov</Typography>
      <Typography variant="subtitle">web developer</Typography>

      <JobItems items={jobs} isLoading={isLoading} />
    </Container>
  );
};

export default App;
