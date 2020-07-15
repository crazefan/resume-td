import styled from "styled-components";

export const StyledParagraph = styled.div`
  font-weight: 600;
`;

export const StyledJobsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 90%;
  margin: auto;
  padding: 10px;
`;

export const StyledJobItem = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 10px 16px;
  width: 300px;
  border-radius: 10px;
  margin: 10px 10px;
  color: white;
  background: ${(props) => props.theme.colors.mainBlue};
  line-height: 1.6;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const $T400 = styled.div`
  font-weight: 400;
`;

export const $AlignContainer = styled.div`
  vertical-align: bottom;
  display: flex;
`;

export const $T700 = styled.div`
  font-weight: 700;
  font-size: 120%;
`;
export const $TItalic = styled.p`
  font-style: italic;
`;
