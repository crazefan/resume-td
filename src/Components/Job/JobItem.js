import React from "react";
import { StyledJobItem, $T700, $TItalic, $AlignContainer } from "./style";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { Grid } from "@material-ui/core";

const JobItem = ({ item }) => {
  return (
    <StyledJobItem>
      <$AlignContainer>
        <Grid container direction="row" alignItems="center">
          <DateRangeIcon fontSize="small" />
          {item.start} - {item.end}
        </Grid>
      </$AlignContainer>
      <$T700>{item.name}</$T700>
      {item.position} <br />
      <$TItalic>{item.info}</$TItalic>
    </StyledJobItem>
  );
};

export default JobItem;
