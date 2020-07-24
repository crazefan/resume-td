import React from "react";
import { Container } from "@material-ui/core";
import MenuTabs from "./Components/MenuTabs/";
import Title from "./Components/Title";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Title />
        <MenuTabs />
      </Container>
    </BrowserRouter>
  );
};

export default App;
