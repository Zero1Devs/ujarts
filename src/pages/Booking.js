import React from "react";
import CustomerLayout from "../CustomerLayout";
import Input from "../components/Input";
//import "../styles/adminLayout.css";
import "../styles/index";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";

const Booking = () => {
  let navigate = useNavigate();
  let params = useParams();
  return (
    <CustomerLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
        }}
      >
        <h1>Book your tickets for event {params.event}</h1>
        <p
          style={{
            width: "50%",
          }}
        >
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
        </p>

        <form className="bookingForm">
          <Input type="text" placeholder="Name" className="textInput" />
          <Input type="text" placeholder="Surname" className="textInput" />
          <Input type="text" placeholder="Email" className="textInput" />
          <Input
            type="text"
            placeholder="Cellphone Number"
            className="textInput"
          />
          <label>Date</label>
          <select name="" className="textInput">
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
          />

          <Button
            text="Cancel"
            onClick={() => navigate("/events")}
            className="btnBookNow"
            style={{ width: "93%", marginTop: "50px", marginBottom: "20px" }}
          />
          <Button
            className="btnFullDetails"
            style={{ width: "93%" }}
            text="Proceed with Payment"
          />
        </form>
      </div>
    </CustomerLayout>
  );
};
export default Booking;
