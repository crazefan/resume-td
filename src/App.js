import React from "react";
import { Container } from "@material-ui/core";
import MenuTabs from "./Components/MenuTabs";
import Title from "./Components/Title";

const App = () => {
  return (
    <Container>
      <Title />
      <MenuTabs />
    </Container>
  );
};

export default App;
