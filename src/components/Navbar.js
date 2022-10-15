import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsPersonFill } from "react-icons/bs";

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
          to="/"
        >
          Home
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
        <NavLink to="/admin">{BsPersonFill}</NavLink>
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
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 50%;
      margin: 10px;
    }
    max-width: 600px;
    height: 40px;
    padding: 0px;
    justify-content: space-between;
  }
  h1 {
    flex: 1;
  }
`;
const Nav = styled.nav`
  flex: 3;
  border: solid 00px;
  display: flex;
  justify-content: right;

  a {
    margin: 10px;
    text-transform: uppercase;
    color: white;
  }
  a:hover {
    color: var(--darkorange);
    animation: scale 1s;
  }
  @keyframes scale {
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  @media only screen and (max-width: 600px) {
    a {
      font-size: 20%;
    }
    align-content: flex-end;
  }
`;
export default Navbar;
