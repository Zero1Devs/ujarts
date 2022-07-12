import React from "react";
import styled from "styled-components";
const Title = (props) => {
  return <StyledH2 {...props}>{props.children}</StyledH2>;
};
export default Title;
export const StyledH2 = styled.h1`
  padding: 5px;
  border-bottom: solid 2px var(--darkpurple);
  color: var(--darkpurple);
  width: ${({ width }) => width || "140px"};
  margin-left: ${({ marginLeft }) => marginLeft || ""};
  text-align: center;
`;
