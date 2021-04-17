import React from "react";
import { Box, Typography } from "@material-ui/core";
import { ErrorProps } from "../../types";

const error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <Box mx="auto">
      <Typography>Something went wrong! Try to reload page.</Typography>
      <Typography>Error message: {message}</Typography>
    </Box>
  );
};

export default error;
