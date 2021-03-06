import React from "react";
import Avatar from "@material-ui/core/Avatar";
import avatartd from "../../Shared/Images/avatar_outline.png";
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
  return <Avatar src={avatartd} className={classes.avatar} alt={"Timur Dolgopolov"}></Avatar>;
};

export default PortraitAvatar;
