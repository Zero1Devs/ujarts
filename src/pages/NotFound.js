import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavigationStore } from "../stores/navigationStore";
const NotFound = () => {
  const navigation = NavigationStore;
  return (
    <Div>
      <div>
        <h1>404!</h1>
        <h2>
          Page Not Found!
          <br />
          Go back!
        </h2>
      </div>
    </Div>
  );
};
export default NotFound;
const Div = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

  color: var(--purple);
`;
