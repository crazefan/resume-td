import React from "react";
import { StyledJobItem, $T400, $T700, $TItalic } from "./style";
import { Twemoji } from "react-emoji-render";

const JobItem = ({ item }) => {
  return (
    <StyledJobItem>
      <$T400>
        <Twemoji text="📅 " />
        {item.start} - {item.end}
      </$T400>
      <$T700>{item.name}</$T700>
      {item.position} <br />
      <$TItalic>{item.info}</$TItalic>
    </StyledJobItem>
  );
};

export default JobItem;
