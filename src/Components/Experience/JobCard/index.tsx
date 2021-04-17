import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { JobProps } from "../../../types";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    display: "flex",
    background: "lightBlue",
    borderRadius: "15px",

    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      background: "#f48fb1",
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
    marginBottom: 12,
    fontSize: 16,
  },
  textColor: {},
});

const JobCard: React.FC<JobProps> = ({ job: { start, end, position, name, info } }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.date} gutterBottom>
          <DateRangeIcon fontSize="small" style={{ marginRight: ".3rem" }} />
          {start} - {end}
        </Typography>
        <Typography className={classes.pos} gutterBottom>
          {position}
        </Typography>
        <Typography variant="subtitle2" className={classes.title} color="textSecondary">
          {name}
        </Typography>
        <Typography variant="body2" component="p">
          {info}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default JobCard;
