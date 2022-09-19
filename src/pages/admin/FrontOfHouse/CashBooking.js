import React, { useState, useEffect } from "react";
import Title from "../../../components/Title";
import styled from "styled-components";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import FrontOfHouseLayOut from "../../../layouts/FrontOfHouseLayOut";
import { Link } from "react-router-dom";

const CashBooking = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirm_email, setConfirm_email] = useState("");
  const [cellphone_number, setCellphone_number] = useState("");
  const [ticket_qty, setTicket_qty] = useState(1);
  const [total_price, setTotal_price] = useState("150");
  const [amount_given, setAmount_given] = useState("");
  const [customer_change, setCustomer_change] = useState("");
  const [discount_code, setDiscount_code] = useState("");
  const [formatingForAmountDue, setFormatingForAmountDue] = useState("");

  useEffect(() => {
    setCustomer_change(amount_given - total_price * ticket_qty * 0.8);
    if (customer_change == 0) {
      setFormatingForAmountDue("No change required");
    } else if (customer_change > 0) {
      setFormatingForAmountDue("Customer change");
    } else {
      setFormatingForAmountDue("Amount Due");
    }
  });

  //Link database data to event drop down list
  const eventList = [
    "MY EARLY JAZZ EDUCATION (AND THE ONE I WANT FOR MY STUDENTS)",
    "Futures and Beyond :: Creativity and 4IR Conference 2022",
    "UNDERSTANDING THE FUNDING LANDSCAPE",
    "COSMOPOLITAN COLLECTIVE DJs",
    "JAZZ AS HERITAGE",
  ];

  const DropDownList = styled("ul")`
    padding: 0;
    margin: 0;
    padding-left: "1em";
    background: "#ffffff";
    box-sizing: border-box;
    color: "#3faffa";
    font-weight: 500;
  `;

  const ListItem = styled("li")`
    list-style: none;
    margin-bottom: 0.8em;
  `;

  return (
    <FrontOfHouseLayOut>
      <Title width="300px">Cash Booking</Title>
      <h1>Enter Details</h1>

      <Div className="container">
        <DropDownList>
          <select>
            {eventList.map((value) => (
              <option value={value} key={value}>
                <ListItem> {value}</ListItem>
              </option>
            ))}
          </select>
        </DropDownList>

        <InputGroup>
          <Input
            width="400px"
            type="text"
            value={name}
            name="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Input
            width="400px"
            type="text"
            value={email}
            name="email"
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Input
            width="400px"
            type="text"
            value={confirm_email}
            name="confirm_email"
            placeholder="Confirm email addres"
            onChange={(e) => setConfirm_email(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Input
            width="400px"
            type="text"
            value={cellphone_number}
            name="cellphone_number"
            placeholder="Cellphone number"
            onChange={(e) => setCellphone_number(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Input
            width="400px"
            type="number"
            name="ticket_qty"
            value={ticket_qty}
            placeholder="Ticket Quantity"
            onChange={(e) => setTicket_qty(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Input
            width="400px"
            type="text"
            value={total_price * ticket_qty}
            name="total_price"
            placeholder="Total Price"
            disabled
            onChange={(e) => setTotal_price(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Input
            width="150px"
            type="text"
            value={discount_code}
            name="discount_code"
            placeholder="Discount code"
            onChange={(e) => setDiscount_code(e.target.value)}
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
          <Input
            width="400px"
            type="number"
            name="amount_given"
            value={amount_given}
            placeholder="Amount Given"
            onChange={(e) => setAmount_given(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <label>{formatingForAmountDue}</label>
        </InputGroup>
        <InputGroup>
          <Input
            width="400px"
            type="number"
            name="customer_change"
            value={customer_change}
            placeholder="Change"
            onChange={(e) => setCustomer_change(e.target.value)}
          />
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
