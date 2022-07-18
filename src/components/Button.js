import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
export default Button;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || "50%"};
  height: ${({ height }) => height || "40px"};
  border: ${({ border }) => border || "none"};
  margin: 3px;
  cursor: pointer;
  border-radius: 5px;
  color: ${({ color }) => color || "white"};
  text-decoration: none;
  background: ${({ background }) => background || "none"};
  :hover {
    background: ${({ hover }) => hover};
    color: white;
  }
`;
