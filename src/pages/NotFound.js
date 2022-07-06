import React from "react";
import { Link } from "react-router-dom";
import { NavigationStore } from "../stores/navigationStore";
const NotFound = () => {
  const navigation = NavigationStore;
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        color: "var(--purple)",
      }}
    >
      <div>
        <h1>404!</h1>
        <h2>
          Page Not Found!
          <br />
          Go back!
        </h2>
      </div>
    </div>
  );
};
export default NotFound;
