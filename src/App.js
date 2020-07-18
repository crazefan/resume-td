import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import JobItems from "./Components/Job/index";
import CenteredContainer from "./Containers/CenteredContainer";
import Theme from "./Theme";
import { Container, Typography } from "@material-ui/core";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://resume-75d42.firebaseio.com/experience.json`
      );
      const fetchedJobs = [];
      for (let key in result.data) {
        fetchedJobs.push({ ...result.data[key] });
      }
      console.log(fetchedJobs);
      setJobs(fetchedJobs);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <Theme>
      <CenteredContainer>
        <Typography>Timur Dolgopolov</Typography>
      </CenteredContainer>
      <Container>
        <JobItems items={jobs} isLoading={isLoading} />
      </Container>
    </Theme>
  );
};

export default App;
