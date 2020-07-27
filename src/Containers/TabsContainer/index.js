import React, { Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Jobs from "../../Components/Experience";
import Skills from "../../Components/Skills";
import Education from "../../Components/Education";
import { Switch, Route, Link, Redirect } from "react-router-dom";

const tabs = [
  {
    value: "/",
    label: "Experience",
    color: "lightBlue",
    exact: true,
    component: Jobs,
  },
  {
    value: "/skills",
    label: "Skills",
    color: "#f48fb1",
    exact: false,
    component: Skills,
  },

  {
    value: "/education",
    label: "Education",
    color: "#1de9b6",
    exact: false,
    component: Education,
  },
];

const MenuTabs = () => {
  const currentColor = (location) => {
    return tabs.find(({ value }) => value === location).color;
  };

  return (
    <Route
      path="/"
      render={({ location }) => (
        <Fragment>
          <Tabs
            style={{ margin: 20 }}
            value={location.pathname}
            TabIndicatorProps={{
              style: {
                height: "7px",
                backgroundColor: currentColor(location.pathname),
              },
            }}
            centered>
            {tabs.map(({ value, label }) => (
              <Tab
                key={value}
                value={value}
                label={label}
                component={Link}
                to={value}
              />
            ))}
          </Tabs>
          <Switch>
            {tabs
              .slice()
              .reverse()
              .map(({ value, component, exact }) => (
                <Route
                  key={value}
                  path={value}
                  exact={exact}
                  component={component}
                />
              ))}
            <Redirect to="/" />
          </Switch>
        </Fragment>
      )}
    />
  );
};

export default MenuTabs;
