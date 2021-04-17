import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import RoomIcon from "@material-ui/icons/Room";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
  card: {
    minWidth: 200,
    maxWidth: 350,
    display: "flex",
    background: "#1de9b6",
    borderRadius: "15px",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      background: "lightBlue",
    },
  },
  date: {
    fontSize: 16,
    color: "textSecondary",
    verticalAlign: "middle",
    display: "inline-flex",
  },
  pos: {
    fontSize: 18,
    lineHeight: 1.2,
    fontWeight: 700,
  },

  title: {
    marginBottom: 5,
    fontSize: 16,
  },
  textColor: {},
});

const Education = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.date} gutterBottom>
            <DateRangeIcon fontSize="small" style={{ marginRight: ".3rem" }} />
            September 2011 - May 2015
          </Typography>
          <Typography className={classes.pos} gutterBottom>
            American University of Central Asia
          </Typography>
          <Typography className={classes.title}>Software Engineering</Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Bachelor of Arts
          </Typography>
          <Typography className={classes.date} gutterBottom>
            <RoomIcon fontSize="small" style={{ marginRight: ".3rem" }} />
            Bishkek, Kyrgyz Republic
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Education;
