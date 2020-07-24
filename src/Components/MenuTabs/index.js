import React, { Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Jobs from "../Experience";
import Skills from "../Skills";
import Education from "../Education";
import { Switch, Route, Link } from "react-router-dom";

const blue = {
  style: {
    height: "7px",
    backgroundColor: "lightBlue",
  },
};

const pink = {
  style: {
    height: "7px",
    backgroundColor: "#f48fb1",
  },
};

const green = {
  style: {
    height: "7px",
    backgroundColor: "lightGreen",
  },
};

const MenuTabs = () => {
  const [value, setValue] = React.useState("/");
  const [color, setColor] = React.useState(blue);
  const changeHandler = (newValue) => {
    setValue(newValue);
    //  console.log(newValue);
    switch (value) {
      case "/":
        setColor(blue);
        break;
      case "/skills":
        setColor(pink);
        break;
      case "/education":
        setColor(green);
        break;
      default:
        setColor(blue);
    }
  };
  return (
    <Route
      path="/"
      render={({ location }) => (
        <Fragment>
          <Tabs
            style={{ margin: 20 }}
            value={location.pathname}
            onChange={changeHandler(location.pathname)}
            TabIndicatorProps={color}
            centered>
            <Tab value="/" label="Experience" component={Link} to="/" />
            <Tab value="/skills" label="Skills" component={Link} to="/skills" />
            <Tab
              value="/education"
              label="Education"
              component={Link}
              to="/education"
            />
          </Tabs>
          <Switch>
            <Route path="/education" render={() => <Education />} />
            <Route path="/skills" render={() => <Skills />} />
            <Route path="/" render={() => <Jobs />} />
          </Switch>
        </Fragment>
      )}
    />
  );
};

export default MenuTabs;
