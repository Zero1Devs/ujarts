import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavWrapper>
      <h1>
        <Link to="/" style={{ color: "white" }}>
          UJ ARTS & CULTURE
        </Link>
      </h1>
      <Nav>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#ff4102" : "",
            };
          }}
          to="/events"
        >
          Events
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#ff4102" : "",
            };
          }}
          to="/venues"
        >
          Venues
        </NavLink>

        <a href="https://movingcube.uj.ac.za/"> Moving Cube</a>
        <a href="https://artmuch.uj.ac.za/">Art Much?</a>
        <a href="https://futuresandbeyond.uj.ac.za/"> Conferences</a>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#ff4102" : "",
            };
          }}
          to="/about"
        >
          About
        </NavLink>
      </Nav>
    </NavWrapper>
  );
};
const NavWrapper = styled.div`
  background-color: #270c3b;
  color: white;
  display: flex;
  align-items: center;
  padding: 40px;
  height: 10px;

  h1 {
    flex: 2;
  }
`;
const Nav = styled.nav`
  flex: 2;
  border: solid 1px;
  display: flex;
  justify-content: right;

  a {
    margin: 10px;
    text-transform: uppercase;
    color: white;
  }
  a:hover {
    color: var(--darkorange);
  }
`;
export default Navbar;
