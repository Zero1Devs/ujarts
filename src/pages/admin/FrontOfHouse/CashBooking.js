import React from "react";
import Title from "../../../components/Title";
import styled from "styled-components";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import FrontOfHouseLayOut from "../../../layouts/FrontOfHouseLayOut";
import { Link } from "react-router-dom";

const CashBooking = (props) => {
  return (
    <FrontOfHouseLayOut>
      <Title width="300px">Cash Booking</Title>

      <Div className="container">
        <h1>Enter Details</h1>
        <InputGroup>
          <Input
            width="400px"
            type="text"
            name="name"
            placeholder="Name"
            onChange={() => alert()}
          />
        </InputGroup>
        <InputGroup>
          <Input
            width="400px"
            type="text"
            name="email"
            placeholder="Enter email address"
            onChange={() => alert()}
          />
        </InputGroup>
        <InputGroup>
          <Input
            width="400px"
            type="text"
            name="confirm_email"
            placeholder="Confirm email addres"
            onChange={() => alert()}
          />
        </InputGroup>
        <InputGroup>
          <Input
            width="400px"
            type="text"
            name="cellphone_number"
            placeholder="Cellphone number"
            onChange={() => alert()}
          />
        </InputGroup>
        <InputGroup>
          <Input
            width="150px"
            type="text"
            name="discount_code"
            placeholder="Discount code"
            onChange={() => alert()}
          />
          <Button
            width="100px"
            color="var(--purple)"
            hover="var(--darkpurple)"
            border="solid 1px var(--darkpurple)"
            onClick={(e) => props.onClick((e = false))}
          >
            Apply
          </Button>
        </InputGroup>

        <InputGroup>
          <Link to={"confirm-cash-booking"}>
            <Button
              width="100px"
              background="var(--purple)"
              hover="var(--darkpurple)"
              border="solid 1px var(--darkpurple)"
              onClick={() => alert("created")}
            >
              Create
            </Button>
          </Link>
        </InputGroup>
      </Div>
    </FrontOfHouseLayOut>
  );
};
export default CashBooking;

const Div = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
  border: none;
  justify-content: center;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  margin-top: ${({ marginTop }) => marginTop || "10px"};
  width: ${({ width }) => width || "320px"};
`;
