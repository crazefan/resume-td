import React from "react";
import Avatar from "@material-ui/core/Avatar";
import avatartd from "../../Shared/Images/avatar-td.jpeg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  avatar: {
    margin: "0px 15px",
    height: "65px",
    width: "65px",
  },
});

const PortraitAvatar = () => {
  const classes = useStyles();
  return <Avatar src={avatartd} className={classes.avatar}></Avatar>;
};

export default PortraitAvatar;
