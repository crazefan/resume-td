import { Box, Typography } from "@material-ui/core";
import React from "react";

const error = (props) => {
  const { message } = props;
  return (
    <Box mx="auto">
      <Typography>Something went wrong! Try to reload page.</Typography>
      <Typography>Error message: {message}</Typography>
    </Box>
  );
};

export default error;
