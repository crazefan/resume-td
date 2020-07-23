import React, { Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Jobs from "../Job";
import Skills from "../Skills";
import Education from "../Education";
import { Switch, Route, Link } from "react-router-dom";


const tabs = [
  {
    value: '/skills',
    label: 'Skills',
    color: '#f48fb1',
    component: Skills,
  },
  {
    value: '/',
    label: 'Experience',
    color: 'lightBlue',
    component: Jobs,
  },
  {
    label: 'Education',
    value: '/education',
    color: 'lightGreen',
    component: Education,
  }  
];

const MenuTabs = () => {
  const currentTab = tabs.find(({ value }) => value === window.location.pathname);

  const color = currentTab.color;

  return (
    <div>
      <Route
        path="/"
        render={({ location }) => (
          <Fragment>
            <Tabs
              style={{ margin: 20 }}
              value={location.pathname}
              TabIndicatorProps={color}
              centered
            >
              {tabs.map(({ value, label }) => (
               <Tab
                to={value}
                label={label}
                component={Link}
               />
              ))}
            </Tabs>
            <Switch>
              {tabs.map(({ value, component }) => (
                <Route
                  path={value}
                  render={() => React.createElement(component)}
                />
              ))}
            </Switch>
          </Fragment>
        )}
      />
    </div>
  );
};

export default MenuTabs;
