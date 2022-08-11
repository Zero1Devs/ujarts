import React from "react";
import CustomerLayout from "../layouts/CustomerLayout";
import Input from "../components/Input";
//import "../styles/adminLayout.css";
import "../styles/index";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import UsingHooks from "../pages/UsingHook";
import { useState } from "react";

const Booking = () => {
  let navigate = useNavigate();
  let params = useParams();
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [ticketQty, setTicketQty] = useState("");
  const [amountInput, setAmountInput] = useState(150);

  return (
    <CustomerLayout>
      <Div>
        <h1>Book your tickets for event {params.event}</h1>
        <Paragraph>
          Terms & Conditions
          <ul>
            <li>
              UJ is a mandatory vaccination site and requires all visitors
              accessing campuses to be vaccinated.
            </li>
            <li>
              Please remember to bring proof of identification and your
              vaccination certificate for verification at the gate. Please
              arrive early to allow additional time for screening.
            </li>
          </ul>
        </Paragraph>

        <form className="bookingForm">
          <Input
            type="text"
            placeholder="Name"
            className="textInput"
            onChange={(event) => setNameInput(event.target.value)}
          />
          <Input
            type="text"
            placeholder="Surname"
            className="textInput"
            onChange={(event) => setSurnameInput(event.target.value)}
          />
          <Input
            type="text"
            placeholder="Email"
            className="textInput"
            onChange={(event) => setEmailInput(event.target.value)}
          />
          <Input
            type="text"
            placeholder="Cellphone Number"
            className="textInput"
            onChange={(event) => setNumberInput(event.target.value)}
          />
          <label>Date</label>
          <select
            name=""
            className="textInput"
            onChange={(event) => setDateInput(event.target.value)}
          >
            <option value="">Date 1</option>
            <option value="">Date 2</option>
            <option value="">Date 3</option>
          </select>
          <label>Quantity</label>
          <Input
            type="number"
            placeholder="Quantity"
            className="textInput"
            min="1"
            onChange={(event) => setTicketQty(event.target.value)}
          />

          <Button
            onClick={() => navigate("/events")}
            background="var(--orange)"
            width={"97%"}
            hover="var(--darkorange)"
          >
            Cancel
          </Button>
          <Button
            background="var(--darkpurple)"
            width={"97%"}
            hover="var(--darkerpurple)"
          >
            Proceed with Payment
          </Button>
        </form>
      </Div>
      <UsingHooks
        amount={amountInput * ticketQty}
        email={emailInput}
        phonenumber={numberInput}
        name={nameInput + " " + surnameInput}
      />
    </CustomerLayout>
  );
};
export default Booking;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`;
const Paragraph = styled.p`
  width: 50%;
`;
