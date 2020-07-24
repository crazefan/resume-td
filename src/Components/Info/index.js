import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import Box from "@material-ui/core/Box";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles({
  root: {
    margin: "50px 20px",
    verticalAlign: "middle",
  },

  date: {
    fontSize: 16,
  },
  icon: {
    fontSize: 24,
    verticalAlign: "middle",
    marginRight: ".3rem",
    color: "lightGreen",
  },
});

const Info = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.date} gutterBottom>
        <PhoneIcon className={classes.icon} />
        +420 792 739
      </Typography>
      <Typography className={classes.date} gutterBottom>
        <EmailIcon className={classes.icon} />
        dolgopolovt@gmail.com
      </Typography>
      <Typography className={classes.date} gutterBottom>
        <RoomIcon className={classes.icon} />
        Prague, Czech Republic
      </Typography>
    </Box>
  );
};

export default Info;
