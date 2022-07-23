import React from "react";
import styled from "styled-components";

const Toggle = (props) => {
  return (
    <StyledToggle {...props}>
      <Option
        background={props.value ? "none" : "var(--darkpurple)"}
        color={props.value ? "black" : "white"}
        onClick={(e) => props.OnClick((e = false))}
      >
        {props.options[0]}
      </Option>
      <Option
        background={props.value ? "var(--darkpurple)" : "none"}
        color={props.value ? "white" : "black"}
        onClick={(e) => props.OnClick((e = true))}
      >
        {props.options[1]}
      </Option>
    </StyledToggle>
  );
};
export default Toggle;
export const StyledToggle = styled.div`
  width: ${({ width }) => width || "300px"};
  height: 40px;
  border-radius: 30px;
  border: none;
  display: flex;
  background: #d9d9d9;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 20px;
`;
export const Option = styled.div`
  background: ${({ background }) => background};
  height: 40px;
  width: 50%;
  border-radius: 30px;
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
`;
