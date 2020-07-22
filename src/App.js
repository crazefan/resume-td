import React from "react";
import { Container, Typography } from "@material-ui/core";
import MenuTabs from "./Components/MenuTabs";

const App = () => {
  return (
    <Container>
      <Typography variant="h5">Timur Dolgopolov</Typography>
      <Typography variant="subtitle2">web developer</Typography>
      <MenuTabs />
    </Container>
  );
};

export default App;
