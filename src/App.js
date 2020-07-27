import React from "react";
import { Container } from "@material-ui/core";
import TabsContainer from "./Containers/TabsContainer";
import TopContainer from "./Containers/InfoContainer";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Container>
      <Switch>
        <Route path="/experience">
          <TopContainer /> <TabsContainer />
        </Route>
        <Route path="/skills">
          <TopContainer /> <TabsContainer />
        </Route>
        <Route path="/education">
          <TopContainer /> <TabsContainer />
        </Route>
        <Route exact path="/">
          <TopContainer /> <TabsContainer />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Container>
  );
};

export default App;
