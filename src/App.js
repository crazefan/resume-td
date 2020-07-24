import React from "react";
import { Container } from "@material-ui/core";
import TabsContainer from "./Containers/TabsContainer";
import { BrowserRouter } from "react-router-dom";
import TopContainer from "./Containers/InfoContainer/";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <TopContainer />
        <TabsContainer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
