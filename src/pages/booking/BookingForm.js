import React from "react";
import Input from "../../components/Input";
import "../../styles/index";
import { observer } from "mobx-react-lite";
import { useBookingPresenter } from "./presenter";

const BookingForm = observer(() => {
  const { name, surname, email, confirm_email, phone_number, setFormValue } =
    useBookingPresenter;

  return (
    <div style={{ width: "40%" }}>
      <h3>Provide your details</h3>
      <label htmlFor="name">Your Name</label>
      <Input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        className="textInput"
        value={name}
        onChange={(event) => setFormValue(event)}
      />
      <label htmlFor="surname">Surname</label>
      <Input
        type="text"
        id="surname"
        name="surname"
        placeholder="Surname"
        className="textInput"
        value={surname}
        onChange={(event) => setFormValue(event)}
      />
      <label htmlFor="phonenumber">Cellphone Number</label>
      <Input
        type="cellphone"
        placeholder="Cellphone Number"
        name="phone_number"
        id="phone_number"
        className="textInput"
        value={phone_number}
        onChange={(event) => setFormValue(event)}
      />
      <label htmlFor="email">Email address</label>
      <Input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        className="textInput"
        value={email}
        onChange={(event) => setFormValue(event)}
      />
      <label htmlFor="confirm_email">Confirm your email address</label>

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
