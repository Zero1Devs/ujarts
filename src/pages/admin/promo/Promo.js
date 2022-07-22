import React, { useState } from "react";
import styled from "styled-components";
import AdminLayout from "../../../layouts/AdminLayout";
import AddPromo from "./AddPromo";
import PromoList from "./PromoList";

const Promo = () => {
  const [screen, setScreen] = useState(false);
  return (
    <AdminLayout>
      <TogglePromo onClick={(e) => setScreen(e)} value={screen} />
      {screen ? <AddPromo onClick={(e) => setScreen(e)} /> : <PromoList />}
    </AdminLayout>
  );
};

const TogglePromo = (props) => {
  return (
    <StyledToggle>
      <Option
        background={props.value ? "none" : "var(--darkpurple)"}
        color={props.value ? "black" : "white"}
        onClick={(e) => props.onClick((e = false))}
      >
        Promos List
      </Option>
      <Option
        background={props.value ? "var(--darkpurple)" : "none"}
        color={props.value ? "white" : "black"}
        onClick={(e) => props.onClick((e = true))}
      >
        New Promo
      </Option>
    </StyledToggle>
  );
};

export default Promo;

const StyledToggle = styled.div`
  width: 300px;
  height: 40px;
  border-radius: 30px;
  border: none;
  display: flex;
  background: #d9d9d9;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 20px;
`;
const Option = styled.div`
  background: ${({ background }) => background};
  height: 40px;
  width: 150px;
  border-radius: 30px;
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
`;
