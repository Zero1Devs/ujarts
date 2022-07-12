import React from "react";
import ujlogo from "../../assets/ujLogo.jpg";
import "../../styles/index";
import * as Icon from "react-feather";
import { NavLink } from "react-router-dom";
import { useAdminPresenter } from "./presenter";
import styled from "styled-components";
//941015
const AdminLayout = (props) => {
  const { logout } = useAdminPresenter;
  return (
    <AdminWrapper>
      <VerticalNavBar>
        <Img src={ujlogo} alt="UJ logo" />

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
          <Span>Events</Span>
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
          <Span>Venues</Span>
        </NavLink>
        <NavLink
          className="navLink"
          style={({ isActive }) => {
            return {
              background: isActive ? "var(--darkpurple)" : "",
            };
          }}
          to="/admin/"
        >
          <Icon.Percent color="white" width={17} />
          <Span>Promo</Span>
        </NavLink>

        <div onClick={() => logout()} className="navLink">
          <Icon.LogOut color="white" width={17} />
          <Span>Logout</Span>
        </div>
      </VerticalNavBar>
      <Div>{props.children}</Div>
    </AdminWrapper>
  );
};

export default AdminLayout;

const AdminWrapper = styled.div`
  display: flex;
`;
const Div = styled.div`
  flex: 1;
  padding: 20px;
`;
const VerticalNavBar = styled.div`
  height: 100vh;
  width: 200px;
  max-width: 200px;
  border: solid 0px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--darkerpurple);
  padding: 10px 0px;
  color: white;
`;
const Img = styled.img`
  border-bottom: solid 1px;
  padding: 10px;
  width: 70%;
  height: 20%;
`;
const Span = styled.span`
  margin-left: 4px;
`;
/*
const LinkWrapper = styled.div`
  color: white;
  padding: 5px 16px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  margin: 4px 0px;
`;
*/
