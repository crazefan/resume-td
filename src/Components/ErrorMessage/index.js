import { Box, Typography } from "@material-ui/core";
import React from "react";

const error = (props) => {
  const { err } = props;
  return (
    <Box m="auto">
      <Typography>Something went wrong! Try to reload page.</Typography>
      <Typography>Error message: {err}</Typography>
    </Box>
  );
};

export default error;
