import React from "react";
import { Container } from "@material-ui/core";
import TabsContainer from "./Containers/TabsContainer";
import TopContainer from "./Containers/InfoContainer";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Container>
      <TopContainer />
      <Switch>
        <Route exact path="/experience" component={TabsContainer} />
        <Route exact path="/skills" component={TabsContainer} />
        <Route exact path="/education" component={TabsContainer} />
        <Route exact path="/" component={TabsContainer} />
        <Redirect to="/" />
      </Switch>
    </Container>
  );
};

export default App;
