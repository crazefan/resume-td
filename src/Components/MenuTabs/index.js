import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Jobs from "../Job";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

function TabContainer(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      // role="tabcontainer"
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

const MenuTabs = () => {
  const [value, setValue] = React.useState(0);
  const changeHandler = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs
        value={value}
        onChange={changeHandler}
        aria-label="section tabs"
        centered>
        <Tab label="Experience" />
        <Tab label="Skills" />
        <Tab label="Education" />
      </Tabs>
      <TabContainer value={value} index={0}>
        <Jobs />
      </TabContainer>
      <TabContainer value={value} index={1}>
        Skills
      </TabContainer>
      <TabContainer value={value} index={2}>
        Item Three
      </TabContainer>
    </div>
  );
};

export default MenuTabs;
