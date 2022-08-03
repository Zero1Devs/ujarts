import React from "react";
import { Link } from "react-router-dom";
import Title from "../../../components/Title";
import FrontOfHouseLayOut from "../../../layouts/FrontOfHouseLayOut";
import styled from "styled-components";
import SearchBarPic from "../../../assets/search_bar.jpg";
import Button from "../../../components/Button";
import { BsFillCameraFill } from "react-icons/bs";

const Foh_main = () => {
  return (
    <FrontOfHouseLayOut>
      <Title width="300px">Guest List</Title>
      <Div>
        <Link to={"guest-list-search-qr-code"}>
          <Button
            width="200px"
            height="200px"
            background=""
            color="black"
            hover="var(--darkpurple)"
            border="solid 1px var(--darkpurple)"
          >
            <h2>
              QR
              <br />
              Scan
              <br />
              <BsFillCameraFill />
            </h2>
          </Button>
        </Link>
        <h1>OR</h1>
        <Link to={"guest-list-search-searchbar"}>
          <img
            src={SearchBarPic}
            alt=""
            width="300px"
            onClick={() => alert("created")}
          />
        </Link>
      </Div>
    </FrontOfHouseLayOut>
  );
};
export default Foh_main;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`;
