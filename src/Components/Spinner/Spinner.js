import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Spinner(color) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress thickness="10" />
    </div>
  );
}
