import React from "react";
import Title from "../../../components/Title";
import styled from "styled-components";
import Button from "../../../components/Button";
import ConfirmPaymentPic from "../../../assets/confirm_payment.jpeg";
import FrontOfHouseLayOut from "../../../layouts/FrontOfHouseLayOut";

const ConfirmCashPayment = () => {
  return (
    <FrontOfHouseLayOut>
      <Title width="300px">Cash Booking</Title>
      <Div>
        <InputGroup>
          <img
            src={ConfirmPaymentPic}
            alt=""
            width={"400px"}
            style={{ float: "left", marginRight: "30px" }}
          />
        </InputGroup>
        <InputGroup>
          <h1>Confirm Cash payment</h1>
        </InputGroup>
        <InputGroup>
          <Button
            width="100px"
            background="var(--purple)"
            hover="var(--darkpurple)"
            border="solid 1px var(--darkpurple)"
            onClick={() => alert("payment confirmed")}
          >
            Confirm
          </Button>
        </InputGroup>
      </Div>
    </FrontOfHouseLayOut>
  );
};
export default ConfirmCashPayment;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const InputGroup = styled.div`
  align-items: center;
  margin: 10px;
  margin-top: ${({ marginTop }) => marginTop || "10px"};
  width: ${({ width }) => width || "320px"};
`;
