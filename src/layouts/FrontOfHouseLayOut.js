import React, { useEffect } from "react";
import ujlogo from "../assets/ujLogo.jpg";
import "../styles/index";
import * as Icon from "react-icons/fi";
import { BsList, BsListTask, BsCashCoin } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useAdminPresenter } from "../pages/admin/auth/presenter";
import { useUserStore } from "../stores/userStore";
import { NavigationStore } from "../stores/navigationStore";
import { AdminWrapper, Div, Img, VerticalNavBar } from "./AdminLayout";
//941015
const FrontOfHouseLayout = (props) => {
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
          to="/admin/foh-main"
        >
          <BsListTask color="white" size={25} />
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
          to="/admin/cash-booking"
        >
          <BsCashCoin color="white" size={25} />
        </NavLink>

        <div onClick={() => logout()} className="navLink">
          <Icon.FiLogOut color="white" size={25} />
        </div>
      </VerticalNavBar>
      <Div>{props.children}</Div>
    </AdminWrapper>
  );
};

export default FrontOfHouseLayout;
