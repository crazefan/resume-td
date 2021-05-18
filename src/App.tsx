import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Container, Box } from "@material-ui/core";

import TabsContainer from "./Containers/TabsContainer";
import InfoContainer from "./Containers/InfoContainer";

const App = () => {
  return (
    <Container>
      <InfoContainer />
      <Box width="75%" mx="auto" mb="100px">
        <Switch>
          <Route exact path="/experience" component={TabsContainer} />
          <Route exact path="/skills" component={TabsContainer} />
          <Route exact path="/education" component={TabsContainer} />
          <Route exact path="/" component={TabsContainer} />
          <Redirect to="/" />
        </Switch>
      </Box>
    </Container>
  );
};

export default App;
