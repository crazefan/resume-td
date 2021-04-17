import React from "react";
import { SpinnerProps } from "../../types";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner: React.FC<SpinnerProps> = ({ spinnerColor }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <CircularProgress thickness={10} style={{ color: `${spinnerColor}` }} />
    </div>
  );
};

export default Spinner;
