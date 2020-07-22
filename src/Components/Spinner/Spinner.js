import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = ({ spinnerColor }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress thickness={10} style={{ color: `${spinnerColor}` }} />
    </div>
  );
};

export default Spinner;
