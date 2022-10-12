import React from "react";
import Input from "../../components/Input";
import "../../styles/index";
import { observer } from "mobx-react-lite";
import { FlexboxGrid } from "rsuite";

const RsvpForm = observer(() => {
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
        onChange={(e) => console.log(e.target.value)}
      />
      <label>Confirm email Address</label>
      <Input
        type="text"
        id="name"
        name="confirm_email"
        className="textInput"
        onChange={(e) => console.log(e.target.value)}
      />
      <label>Your Telephone Number</label>
      <Input
        type="text"
        id="name"
        name="Telnumber"
        className="textInput"
        onChange={(e) => console.log(e.target.value)}
      />
      <label>Communication Method</label>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <span>
          <label for="sms">SMS</label>
          <Input
            type="radio"
            id="sms"
            name="communication_method"
            value="SMS"
          />
        </span>
        <span>
          <label for="sms">Email</label>
          <Input
            type="radio"
            id="email"
            name="communication_method"
            value="Email"
          />
        </span>
      </div>
    </div>
  );
});

export default RsvpForm;
