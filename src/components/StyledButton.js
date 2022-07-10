import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
export default Button;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || "50%"};
  height: 35px;
  margin: 3px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  background: ${({ background }) => background};
  :hover {
    background: ${({ backgroundHover }) => backgroundHover};
  }
`;
