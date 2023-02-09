import React, { useState } from "react";
import Input from "../Input";
import "../../styles/index";
import { observer } from "mobx-react-lite";
import { FlexboxGrid } from "rsuite";
import { Radio } from "../../pages/booking/Checkout";
import { useBookingPresenter } from "../../pages/booking/presenter";

const RsvpForm = observer(() => {
  const [checked, setChecked] = useState("");
  const { setFormValue } = useBookingPresenter;
  return (
    <div
      style={{
        width: "40%",
        marginLeft: "10%",
        marginTop: "10%",
      }}
    >
      <h3>Provide Your details</h3>
      <label>Your name</label>
      <Input
        type="text"
        id="name"
        name="name"
        className="textInput"
        onChange={console.log("change name")}
      />
      <label>Your email Address</label>
      <Input
        type="text"
        id="name"
        name="email"
        className="textInput"
        onChange={(e) => setFormValue(e)}
      />
      <label>Confirm email Address</label>
      <Input
        type="text"
        id="name"
        name="confirm_email"
        className="textInput"
        onChange={(e) => setFormValue(e)}
      />
      <label>Your Telephone Number</label>
      <Input
        type="text"
        id="name"
        name="Telnumber"
        className="textInput"
        onChange={(e) => setFormValue(e)}
      />
      <label>Communication Method</label>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <Radio>
          <label htmlFor="sms">SMS</label>
          <input
            id="sms"
            name="communication_method"
            value={"sms"}
            checked={checked === "sms"}
            onChange={(e) => {
              setFormValue(e);
              setChecked(e.target.value);
              console.log(e.target.name);
            }}
            type={"radio"}
          />
        </Radio>
        <Radio>
          <label htmlFor="email"> Email</label>
          <input
            id="email"
            name="communication_method"
            value={"email"}
            checked={checked === "email"}
            onChange={(e) => {
              setFormValue(e);
              setChecked(e.target.value);
              console.log(e.target.name);
            }}
            type={"radio"}
          />
        </Radio>
      </div>
    </div>
  );
});

export default RsvpForm;
