import React from "react";
import PortraitAvatar from "../PortraitAvatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Title = () => {
  return (
    <Box display="flex" justifyContent="center">
      <PortraitAvatar />
      <Box>
        <Typography variant="h5">Timur Dolgopolov</Typography>
        <Typography
          variant="subtitle1"
          display="inline"
          style={{ marginRight: 5, color: "lightBlue", fontSize: "1.4rem" }}
        >
          web
        </Typography>
        <Typography
          variant="subtitle1"
          display="inline"
          style={{ marginRight: 5, color: "#F48FB1", fontSize: "1.4rem" }}
        >
          developer
        </Typography>
      </Box>
    </Box>
  );
};

export default Title;
