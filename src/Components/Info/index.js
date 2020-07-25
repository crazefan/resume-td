import React from "react";

import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";

import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from "@material-ui/icons/Telegram";
import GitHubIcon from "@material-ui/icons/GitHub";

const chips = [
  {
    id: 0,
    icon: <PhoneIcon style={{ color: "#000" }} />,
    label: "+420 792 739",
    link: "call:+420 792 739",
    color: "lightBlue",
  },
  {
    id: 1,
    icon: <EmailIcon style={{ color: "#000" }} />,
    label: "dolgopolovt@gmail.com",
    link: "mailto:dolgopolovt@gmail.com",
    color: "lightBlue",
  },
  {
    id: 2,
    icon: <TelegramIcon style={{ color: "#000" }} />,
    label: "crazefan",
    link: "https://t.me/crazefan",

    color: "#f48fb1",
  },
  {
    id: 3,
    icon: <GitHubIcon style={{ color: "#000" }} />,
    label: "crazefan",
    link: "https://www.github.com/crazefan",
    color: "#f48fb1",
  },
  {
    id: 4,
    icon: <RoomIcon style={{ color: "#000" }} />,
    label: "Prague, Czech Republic",
    color: "#1de9b6",
  },
];

const Info = () => {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justify="center"
      alignItems="flex-start">
      {chips.map((item) => (
        <Grid key={item.id} item>
          <Link
            href={item.link}
            rel="noopener"
            target="_blank"
            underline="none">
            <Chip
              icon={item.icon}
              label={item.label}
              clickable
              size="small"
              style={{ backgroundColor: item.color }}></Chip>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Info;
