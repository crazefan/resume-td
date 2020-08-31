import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = (spinnerColor: String) => {
  console.log(typeof spinnerColor);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <CircularProgress thickness={10} style={{ color: `${spinnerColor}` }} />
    </div>
  );
};

export default Spinner;
