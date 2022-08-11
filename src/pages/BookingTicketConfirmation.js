import React from "react";
import Input from "../components/Input";
//import "../styles/adminLayout.css";
import "../styles/index";
import Button from "../components/Button";
import styled from "styled-components";
import { useState } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";

const Booking = () => {
  const [placeInput, setPlaceInput] = useState("Place: Some where on earth");
  const [ticketTypeInput, setTicketTypeInput] = useState("Ticket Type: RSVP");
  const [ticketQty, setTicketQty] = useState("Qty: 2");
  const [dateInput, setDateInput] = useState("Date: 13-05-22");
  const [timeInput, setTimeInput] = useState("Time: 10:30");
  const [amountInput, setAmountInput] = useState("Amount: R300");
  const [refNum, setRefNum] = useState("Ref Num: 150WY4ItM4");
  const [qr, setQr] = useState(<QRCode value={refNum} />);
  return (
    <>
      <Div>
        <form className="bookingForm">
          <Input
            type="text"
            disabled
            placeholder="Place: "
            className="textInput"
            value={placeInput}
            onChange={(event) => setPlaceInput(event.target.value)}
          />
          <Input
            type="text"
            disabled
            placeholder="Surname"
            className="textInput"
            value={ticketTypeInput}
            onChange={(event) => setTicketTypeInput(event.target.value)}
          />
          <Input
            type="text"
            disabled
            placeholder="Email"
            className="textInput"
            value={ticketQty}
            onChange={(event) => setTicketQty(event.target.value)}
          />
          <Input
            type="text"
            disabled
            placeholder="Email"
            className="textInput"
            value={dateInput}
            onChange={(event) => setDateInput(event.target.value)}
          />
          <Input
            type="text"
            disabled
            placeholder="Email"
            value={timeInput}
            className="textInput"
            onChange={(event) => setTimeInput(event.target.value)}
          />
          <Input
            type="text"
            disabled
            placeholder="Email"
            className="textInput"
            value={amountInput}
            onChange={(event) => setAmountInput(event.target.value)}
          />
          <Input
            type="text"
            disabled
            placeholder="Cellphone Number"
            className="textInput"
            value={refNum}
            onChange={(event) => setRefNum(event.target.value)}
          />
          {/* <img src={<QRCode value={refNum} />} /> */}
          <QRCode value={refNum} />
          <Button
            background="var(--darkpurple)"
            width={"97%"}
            hover="var(--darkerpurple)"
            href={qr}
            download="qrcode.png"
          >
            Download
          </Button>
          <Link to={"/"}>
            <Button
              background="var(--grey)"
              width={"97%"}
              hover="var(--purple)"
            >
              Return
            </Button>
          </Link>
        </form>
      </Div>
    </>
  );
};
export default Booking;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`;
