import React from "react";
import ujlogo from "../../assets/ujLogo.jpg";
import "../../styles/index";
import * as Icon from "react-feather";
import { NavLink } from "react-router-dom";

const AdminLayout = (props) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "0px",
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "200px",
          border: "solid 0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "var(--darkerpurple)",
          padding: "10px 0px",
          color: "white",
        }}
      >
        <img
          src={ujlogo}
          width="70%"
          alt="UJ logo"
          height="20%"
          style={{
            borderBottom: "solid 1px",
            padding: "10px",
          }}
        />
      
        <NavLink
          className="navLink"
          style={({ isActive }) => {
            return {
              background: isActive ? "var(--darkpurple)" : "",
            };
          }}
          to="/admin/events"
        >
          <Icon.Calendar color="white" width={17} />
          <span style={{ marginLeft: "4px" }}>Events</span>
        </NavLink>
        <NavLink
          className="navLink"
          style={({ isActive }) => {
            return {
              background: isActive ? "var(--darkpurple)" : "",
            };
          }}
          to="/admin/venues"
        >
          <Icon.Calendar color="white" width={17} />
          <span style={{ marginLeft: "4px" }}>Venues</span>
        </NavLink>
        <NavLink className="navLink" to="/admin/venues">
          <Icon.LogOut color="white" width={17} />
          <span style={{ marginLeft: "4px" }}>Logout</span>
        </NavLink>
      </div>
      <div style={{ flex: 2, padding: "20px" }}>{props.children}</div>
    </div>
  );
};

export default AdminLayout;
