import React from "react";
import Input from "../../components/Input";
import "../../styles/index";
import { observer } from "mobx-react-lite";
import { useBookingPresenter } from "./presenter";

const BookingForm = observer(() => {
  const { name, email, confirm_email, phonenumber, setFormValue } =
    useBookingPresenter;

  return (
    <div style={{ width: "40%" }}>
      <h3>Provide your details</h3>
      <label for="name">Your Name</label>
      <Input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        className="textInput"
        value={name}
        onChange={(event) => setFormValue(event)}
      />
      <label for="phonenumber">Cellphone Number</label>
      <Input
        type="cellphone"
        placeholder="Cellphone Number"
        name="phonenumber"
        id="phonenumber"
        className="textInput"
        value={phonenumber}
        onChange={(event) => setFormValue(event)}
      />
      <label for="email">Email address</label>
      <Input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        className="textInput"
        value={email}
        onChange={(event) => setFormValue(event)}
      />
      <label for="confirm_email">Confirm your email address</label>

      <Input
        type="email"
        name="confirm_email"
        id="confirm_email"
        placeholder="Confirm your email address"
        className="textInput"
        value={confirm_email}
        onChange={(event) => setFormValue(event)}
      />
    </div>
  );
});
export default BookingForm;
