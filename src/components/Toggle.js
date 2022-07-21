import React, { useState } from "react";
import styled from "styled-components";

const Toggle = () => {
  const [screen, setScreen] = useState(true);
  return (
    <StyledToggle>
      <Option
        background={screen ? "var(--darkpurple)" : "none"}
        onClick={() => setScreen(true)}
      >
        Venue List
      </Option>
      <Option
        background={screen ? "none" : "var(--darkpurple)"}
        onClick={() => setScreen(false)}
      >
        Add Venue
      </Option>
    </StyledToggle>
  );
};

const StyledToggle = styled.div`
  width: 300px;
  height: 40px;
  border-radius: 30px;
  border: solid 1px var(--gray);
  display: flex;
  background: white;
  cursor: pointer;
`;
const Option = styled.div`
  background: ${({ background }) => background};
  height: 40px;
  width: 150px;
  border-radius: 30px;
  color: white;
  text-align: center;
`;
