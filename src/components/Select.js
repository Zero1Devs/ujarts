import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: 120px;
  height: 42px;
  border-radius: 5px;
  margin-left: 10px;
  margin-bottom: 5px;
  padding: 10px;
  color: white;
  background: var(--purple);
  border: none;
`;
const Select = (props) => {
  return <StyledSelect {...props}>{props.children}</StyledSelect>;
};
export default Select;
