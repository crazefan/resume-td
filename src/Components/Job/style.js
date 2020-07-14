import styled from "styled-components";

export const StyledJobsContainer = styled.div`
  width: 90%;
  margin: auto;
`;

export const StyledJobItem = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 2px 16px;
  width: 20%;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
