import React from "react";
import Input from "../../components/Input";
import "../../styles/index";
import Button from "../../components/Button";
import { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { observer } from "mobx-react-lite";
import { NavigationStore } from "../../stores/navigationStore";

const navigation = NavigationStore;

const BookingForm = observer(() => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
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
        onChange={(event) => setName(event.target.value)}
      />
      <label for="phonenumber">Cellphone Number</label>
      <Input
        type="cellphone"
        placeholder="Cellphone Number"
        name="phonenumber"
        id="phonenumber"
        className="textInput"
        value={phonenumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <label for="email">Email address</label>
      <Input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        className="textInput"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label for="confirm_email">Confirm your email address</label>

      <Input
        type="email"
        name="confirm_email"
        id="confirm_email"
        placeholder="Confirm your email address"
        className="textInput"
        value={confirmEmail}
        onChange={(event) => setConfirmEmail(event.target.value)}
      />
      <label for="date">Date</label>

      <Input
        type="date"
        name="date"
        id="date"
        min={Date.now()}
        className="textInput"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <label for="quantity">Quantity</label>

      <Input
        type="number"
        name="quantity"
        id="quantity"
        defaultValue={1}
        min={1}
        max={10}
        className="textInput"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />
      <Button
        onClick={() => navigation.push("/")}
        background="var(--orange)"
        width="104%"
        hover="var(--darkorange)"
      >
        Cancel
      </Button>
      <PaymentButton
        amount={150 * quantity}
        name={name}
        email={email}
        phonenumber={phonenumber}
      />
    </div>
  );
});
export default BookingForm;

const PaymentButton = (props) => {
  const config = {
    public_key: "FLWPUBK_TEST-dec0f79285aabb4f1ce728dcf3c05a93-X",
    tx_ref: Date.now(),
    amount: props.amount,
    currency: "NGN",
    redirect_url: "localhost:3000/ticket-confirmation",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: props.email,
      phonenumber: props.phonenumber,
      name: props.name,
    },
    customizations: {
      title: "UJ Arts",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  return (
    <Button
      background="var(--darkpurple)"
      width="104%"
      hover="var(--darkerpurple)"
      onClick={() => {
        handleFlutterPayment({
          callback: (response) => {
            console.log(response);
            closePaymentModal(); // this will close the modal programmatically
          },
          onClose: () => navigation.push("ticket-confirmation"),
        });
      }}
    >
      Proceed with Payment
    </Button>
  );
};
