import React from "react";
import { Container } from "@material-ui/core";
import MenuTabs from "./Components/MenuTabs/";
import { BrowserRouter } from "react-router-dom";
import TopContainer from "./Containers/InfoContainer/";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <TopContainer />
        <MenuTabs />
      </Container>
    </BrowserRouter>
  );
};

export default App;
