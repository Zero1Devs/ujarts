import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: 100%;
  height: 42px;
  border-radius: 5px;
  margin: 5px 0px;

  padding: 10px;
  filter: drop-shadow(2px 2px 2px #45116d);

  border: none;
`;
const Select = (props) => {
  return (
    <StyledSelect {...props}>
      {props?.children}
      {props?.options?.map((option) => (
        <option value={option.id} key={option.id}>
          {option.name}
        </option>
      ))}
    </StyledSelect>
  );
};
export default Select;
/*
 {props?.options?.map((option) =>
        props?.selected.abbreviation === option.abbreviation ? (
          <option selected value={option.id} key={option.id}>
            {option.name}
          </option>
        ) : (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        )
      )}
 */
