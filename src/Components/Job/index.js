import React from "react";
import { StyledJobsContainer } from "./style";
import JobItem from "./JobItem";
import Spinner from "../Spinner/Spinner";

const JobItems = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <StyledJobsContainer>
      {items.map((item) => (
        <JobItem key={item.id} item={item}></JobItem>
      ))}
    </StyledJobsContainer>
  );
};

export default JobItems;
