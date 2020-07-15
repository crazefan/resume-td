import React from "react";
import { StyledJobsContainer } from "./style";
import JobItem from "./JobItem";

const JobItems = ({ items, isLoading }) => {
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <StyledJobsContainer>
      {items.map((item) => (
        <JobItem key={item.id} item={item}></JobItem>
      ))}
    </StyledJobsContainer>
  );
};

export default JobItems;
