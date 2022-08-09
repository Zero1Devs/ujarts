import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return <StyledInput {...props} />;
};
export default Input;
export const StyledInput = styled.input`
  width: ${({ width }) => width || "100%"};
  height: 40px;
  margin: 10px 0px;
  border-radius: 6px;
  padding-left: 10px;
  border: none;
  background: white;
  filter: drop-shadow(2px 2px 2px #45116d);
  border: 2px solid transparent;
  :focus {
    outline: none !important;
    border: 2px solid var(--darkpurple);
  }
  
`;
