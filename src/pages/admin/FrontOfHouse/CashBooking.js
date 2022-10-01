import React, { useState, useEffect } from "react";
import Title from "../../../components/Title";
import styled from "styled-components";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import FrontOfHouseLayOut from "../../../layouts/FrontOfHouseLayOut";
import { Link, useNavigate } from "react-router-dom";
import { useFrontOfHousePresenter } from "./presenter";
import { observable } from "mobx";
import { usePromoPresenter } from "../promo/presenter";
import { useEventPresenter } from "../event/presenter";
const CashBooking = observable((props) => {
  const {
    name,
    email,
    phone_number,
    quantity,
    amount_given,
    change,
    setFormValue,
  } = useFrontOfHousePresenter;
  const { gridEvents } = useEventPresenter;
  const { promos, getPromos } = usePromoPresenter;
  const [total_price, setTotal_price] = useState("150");
  const [discount_code, setDiscount_code] = useState("");
  const [discount_percentage, setDiscount_percentage] = useState(1);
  const [discount_appied, setDiscount_appied] = useState(false);
  const [formating_discount_appied, setFormating_discount_appied] =
    useState("Apply");

  const [formatingForAmountDue, setFormatingForAmountDue] = useState("");

  useEffect(() => {
    setFormValue(total_price * ticket_qty * discount_percentage);
    if (change == 0) {
      setFormatingForAmountDue("No change requiredz");
    } else if (change > 0) {
      setFormatingForAmountDue("Customer change");
    } else {
      setFormatingForAmountDue("Amount Due");
    }

    if (discount_appied == true) {
      setFormating_discount_appied("Applied");
      setDiscount_percentage(0.5);
    } else {
      setFormating_discount_appied("Apply");
      setDiscount_percentage(1);
    }
  });

  //Get data from db
  const promoList = ["UJ Rocks", "art is cool"];
  const checkPromoCode = () => {
    if (promoList) {
      for (var i = 0; i < promoList.length; i++) {
        if (promoList[i] === discount_code) {
          setDiscount_appied(true);
          console.log(discount_code + "true");
          return;
        } else if (promoList[i] != discount_code) {
          setDiscount_appied(false);
          console.log(discount_code + "false");
        }
      }
    }
    // for (let i = 0; i <= promoList.length; i++) {
    //   console.log(promoList[(1, i, 0)]); // 1 2 3 4 5 6
    // }
  };

  //Link database data to event drop down list
  const eventList = [
    "Futures and Beyond :: Creativity and 4IR Conference 2022",
    "UNDERSTANDING THE FUNDING LANDSCAPE",
    "COSMOPOLITAN COLLECTIVE DJs",
    "JAZZ AS HERITAGE",
    "MY EARLY JAZZ EDUCATION (AND THE ONE I WANT FOR MY STUDENTS)",
  ];

  return (
    <FrontOfHouseLayOut>
      <Title width="300px">Cash Booking</Title>
      <h1>Enter Customer details</h1>

      <Div>
        <Form>
          <Input
            width="400px"
            type="text"
            value={name}
            name="name"
            placeholder="Name"
            onChange={(e) => setFormValue(e)}
          />

          <Input
            width="400px"
            type="text"
            value={email}
            name="email"
            placeholder="Enter email address"
            onChange={(e) => setFormValue(e)}
          />

          <Input
            width="400px"
            type="text"
            value={phone_number}
            name="phone_number"
            placeholder="Cellphone number"
            onChange={(e) => setFormValue(e)}
          />

          <Label>Event</Label>
          <Select
            width="420px"
            options={gridEvents}
            name="event"
            onChange={(e) => setFormValue(e)}
          />

          <Label>Ticket Quantity</Label>

          <Input
            width="400px"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Ticket Quantity"
            onChange={(e) => setFormValue(e)}
          />
          <Label>Total Amount</Label>

          <Input
            width="400px"
            type="text"
            value={total_price * ticket_qty}
            name="total_price"
            placeholder="Total Price"
            background="red"
            disabled
            onChange={(e) => setTotal_price(e.target.value)}
          />
          <Label>Discount code</Label>
          <InputGroup>
            <Input
              width="400px"
              type="text"
              value={discount_code}
              name="discount_code"
              placeholder="Discount code"
              onChange={(e) => setDiscount_code(e.target.value)}
            />
            <Button
              style={{
                background: discount_appied ? "green" : "var(--purple)",
              }}
              width="200px"
              hover="var(--darkpurple)"
              border="solid 1px var(--darkpurple)"
              onClick={checkPromoCode}
            >
              {formating_discount_appied}
            </Button>
          </InputGroup>
          <Label>Amount Given</Label>

          <Input
            width="400px"
            type="number"
            name="amount_given"
            value={amount_given}
            placeholder="Amount Given"
            onChange={(e) => setFormValue(e)}
          />

          <Label>{formatingForAmountDue}</Label>

          <Input
            color=" var(--darkpurple)"
            width="400px"
            type="number"
            name="change"
            value={amount_given - change}
            placeholder="Change"
            disabled
            onChange={(e) => setFormValue(e.target.value)}
          />

          <Link to={"/admin/cash-booking/confirm-cash-booking"}>
            <Button
              width="415px"
              background="var(--purple)"
              hover="var(--darkpurple)"
              border="solid 1px var(--darkpurple)"
            >
              Proceed
            </Button>
          </Link>
        </Form>
      </Div>
    </FrontOfHouseLayOut>
  );
});
export default CashBooking;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  justify-content: center;
  align-items: center; /**/
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  justify-content: center;
`;
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px;
  margin-top: ${({ marginTop }) => marginTop || "10px"};
  width: ${({ width }) => width || "420px"};
`;

const Select = styled.select`
  height: 40px;
  margin: 10px 0px;
  border-radius: 6px;
  padding-left: 10px;
  border: none;
  background: white;
  filter: drop-shadow(2px 2px 2px #45116d);
  border: 2px solid transparent;
  :focus {
    outline: none !important;
    border: 2px solid var(--darkpurple);
  }
  width: ${({ width }) => width || "320px"};
`;

const Label = styled.label`
  padding-left: 10px;
`;
