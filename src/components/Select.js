import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: ${({ width }) => width || "100%"};
  height: 42px;
  border-radius: 5px;
  margin: 5px 0px;

  padding: 10px;
  filter: drop-shadow(2px 2px 2px #45116d);

  border: none;
  @media only screen and (max-width: 600px) {
    background-color: #4f2365;
    color: white;
    width: 100%;
    height: 30px;
    display: block;
    margin-left: 0px;
    font-size: 10px;
    padding: 5px;
    label {
      color: var(--purple);
    }
  }
`;
const Select = (props) => {
  return (
    <StyledSelect {...props}>
      {props?.options ? (
        props?.options?.map((option) => (
          <option value={option?.id} key={option?.id}>
            {option?.name}
          </option>
        ))
      ) : (
        <option></option>
      )}
    </StyledSelect>
  );
};
export default Select;
