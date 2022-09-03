import React, { useEffect } from "react";
import ujlogo from "../assets/ujLogo.jpg";
import "../styles/index";
import * as Icon from "react-icons/fi";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { FaCashRegister } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAdminPresenter } from "../pages/admin/auth/presenter";
import styled from "styled-components";
import { useUserStore } from "../stores/userStore";
import { NavigationStore } from "../stores/navigationStore";

const AdminLayout = (props) => {
  const { logout } = useAdminPresenter;
  const { isLoggedIn } = useUserStore;
  const { replace } = NavigationStore;
  useEffect(() => {
    if (!isLoggedIn) replace("/admin");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AdminWrapper>
      <VerticalNavBar>
        <Img src={ujlogo} alt="UJ logo" />

        <NavLink
          className="navLink"
          style={({ isActive }) => {
            return {
              background: isActive ? "var(--darkpurple)" : "",
              borderLeft: isActive
                ? "solid 5px white"
                : "solid 5px transparent",
              borderTopLeftRadius: "2px",
              borderBottomLeftRadius: "2px",
            };
          }}
          to="/admin/events"
        >
          <Icon.FiCalendar color="white" size={25} />
        </NavLink>
        <NavLink
          className="navLink"
          style={({ isActive }) => {
            return {
              background: isActive ? "var(--darkpurple)" : "",
              borderLeft: isActive
                ? "solid 5px white"
                : "solid 5px transparent",
              borderTopLeftRadius: "2px",
              borderBottomLeftRadius: "2px",
            };
          }}
          to="/admin/venues"
        >
          <Icon.FiTv color="white" size={25} />
        </NavLink>

        <NavLink
          className="navLink"
          style={({ isActive }) => {
            return {
              background: isActive ? "var(--darkpurple)" : "",
              borderLeft: isActive
                ? "solid 5px white"
                : "solid 5px transparent",
              borderTopLeftRadius: "2px",
              borderBottomLeftRadius: "2px",
            };
          }}
          to="/admin/promo"
        >
          <Icon.FiPercent color="white" size={25} />
        </NavLink>

        <NavLink
          className="navLink"
          style={({ isActive }) => {
            return {
              background: isActive ? "var(--darkpurple)" : "",
              borderLeft: isActive
                ? "solid 5px white"
                : "solid 5px transparent",
              borderTopLeftRadius: "2px",
              borderBottomLeftRadius: "2px",
            };
          }}
          to="/admin/announcements"
        >
          <BsFillMegaphoneFill color="white" size={25} />
        </NavLink>
        <NavLink
          className="navLink"
          style={({ isActive }) => {
            return {
              background: isActive ? "var(--darkpurple)" : "",
              borderLeft: isActive
                ? "solid 5px white"
                : "solid 5px transparent",
              borderTopLeftRadius: "2px",
              borderBottomLeftRadius: "2px",
            };
          }}
          to="/admin/foh"
        >
          <FaCashRegister color="white" size={25} />
        </NavLink>
        <div onClick={() => logout()} className="navLink">
          <Icon.FiLogOut color="white" size={25} />
        </div>
      </VerticalNavBar>
      <Div>{props.children}</Div>
    </AdminWrapper>
  );
};

export default AdminLayout;

const AdminWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0px;
  border: solid 0px blue;
  height: 100vh;
`;
const Div = styled.div`
  flex: 2;
  padding: 0px 20px;
  height: 100%;
  min-height: 93vh;
  border: solid 0px red;
  overflow-y: scroll;
`;
const VerticalNavBar = styled.div`
  max-width: 162px;
  border: solid 0px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--darkerpurple);
  padding: 0px 0px;
  color: white;
`;
const Img = styled.img`
  padding: 10px;
  width: 75%;
  height: 18%;
  margin-bottom: 20px;
`;
