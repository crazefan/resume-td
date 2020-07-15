import React from "react";
import styled from "styled-components";

const $Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.mainBlue};
`;

const $Subtitle = styled.p`
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: large;
  margin-top: 5px;
`;

const CenteredContainer = () => {
  return (
    <div>
      <$Title>TIMUR DOLGOPOLOV</$Title>
      <$Subtitle>web developer</$Subtitle>
    </div>
  );
};

export default CenteredContainer;
