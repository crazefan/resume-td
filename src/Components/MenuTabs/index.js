import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

import Jobs from "../Job";
import Skills from "../Skills";

function TabContainer(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

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
    backgroundColor: "green",
  },
};

const MenuTabs = () => {
  const [value, setValue] = React.useState(0);
  const [color, setColor] = React.useState(blue);
  const changeHandler = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        setColor(blue);
        break;

      case 1:
        setColor(pink);
        break;
      case 2:
        setColor(green);
    }
  };
  return (
    <div>
      <Tabs
        value={value}
        onChange={changeHandler}
        TabIndicatorProps={color}
        centered>
        <Tab value={0} label="Experience" />
        <Tab value={1} label="Skills" />
        <Tab value={2} label="Education" />
      </Tabs>
      <TabContainer value={value} index={0}>
        <Jobs />
      </TabContainer>
      <TabContainer value={value} index={1}>
        <Skills />
      </TabContainer>
      <TabContainer value={value} index={2}>
        Item Three
      </TabContainer>
    </div>
  );
};

export default MenuTabs;
